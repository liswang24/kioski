#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino_JSON.h>
#include <ThingSpeak.h>

#define DISPENSE_FLAG 25
#define RESTOCK_FLAG  23

const char* ssid = "YOUR_SSID_HERE";
const char* password = "YOUR_PASSWORD_HERE";

// ThingSpeak information
char thingSpeakAddress[] = "api.thingspeak.com";
unsigned long channelID = "CHANNEL_ID";
char* readAPIKey = "READ_API_KEY_HERE";
char* writeAPIKey = "WRITE_API_KEY_HERE";
const unsigned long postingInterval = 5000;
unsigned int dataFieldOne = 1;  

unsigned long lastConnectionTime = 0;
long lastUpdateTime = 0;

WiFiClient client;

int stock;

String jsonBuffer;

void setup() {
  Serial.begin(9600);

  pinMode(DISPENSE_FLAG, OUTPUT);
  pinMode(RESTOCK_FLAG, INPUT);

  digitalWrite(DISPENSE_FLAG, HIGH);

  // WIFI
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("Connecting to wifi network...");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  ThingSpeak.begin( client );

  Serial.print("Database Inventory: ");
  stock = readTSData( channelID, dataFieldOne);
}

void loop() {
  // Send HTTP GET request in intervals
  if((millis() - lastUpdateTime) >= postingInterval) {
    lastUpdateTime = millis();
    
    Serial.println("Get Inventory");
    int inventory= readTSData(channelID, dataFieldOne);

    Serial.print("Inventory: ");
    Serial.println(inventory);
    Serial.print("Stock: ");
    Serial.println(stock);
    
    if (inventory < stock) {
      dispense();
    } 
  }

  if (digitalRead(RESTOCK_FLAG)){
      Serial.println("RESTOCK");
      restock();

    }
}

// Tell Arduino to dispense 
void dispense() {
  Serial.println("DISPENSE");
  digitalWrite(DISPENSE_FLAG, LOW);
  delay(500);
  digitalWrite(DISPENSE_FLAG, HIGH);
  stock--;
}

void restock() {
  Serial.println("RESTOCK");
  stock++;
  delay(2000);
  // Update database inventory to stock
  writeTSData( channelID, dataFieldOne, stock);
}

float readTSData( long TSChannel,unsigned int TSField ){
    
  float data =  ThingSpeak.readFloatField( TSChannel, TSField, readAPIKey );
  Serial.println( " Data read from ThingSpeak: " + String( data, 9 ) );
  return data;

}

// Use this function if you want to write a single field.
int writeTSData( long TSChannel, unsigned int TSField, float data ){
  int  writeSuccess = ThingSpeak.writeField( TSChannel, TSField, data, writeAPIKey ); // Write the data to the channel
  if ( writeSuccess ){
    
    Serial.println( String(data) + " written to Thingspeak." );
    }
    
    return writeSuccess;
}
