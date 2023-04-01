#include "AccelStepper.h"
// AccelStepper Setup
AccelStepper stepperX(1, 8, 9);   // 1 = Easy Driver interface
                                  // NANO Pin 8 connected to STEP pin of Easy Driver
                                  // NANO Pin 9 connected to DIR pin of Easy Driver
// Define the Pins used
#define DISPENSESTOCKFLAG 2
#define RESTOCKFLAG 3
#define BUTTON 4

//Vars for Motor Motion Control
long dist = 4;                    //Linear distance to travel in inches 
long step = dist*5781/(3.5*3.14);        //Number of steps to travel distance
long TargetDist = 0;              //Absolute target distance to travel to 

void setup() {
  Serial.begin(9600);             // Start the Serial monitor with speed of 9600 Bauds  
  delay(5);                       //Wait for EasyDriver Wake up

   //  Set Max Speed and Acceleration of each Steppers at startup
  stepperX.setMaxSpeed(5000.0);      // Set Max Speed of Stepper (Slower to get better accuracy)
  stepperX.setAcceleration(2500.0);  // Set Acceleration of Stepper
  stepperX.setCurrentPosition(0);    // Set the current position as zero for now
  stepperX.setMinPulseWidth(20);     // Incase the microcontroller runs too fast, this sets the minimum pulse
                                     //...width to 20 microseconds, the driver requires a min of 7.5 us
  pinMode(DISPENSESTOCKFLAG, INPUT_PULLUP);
  pinMode(RESTOCKFLAG, OUTPUT);
  pinMode(BUTTON, INPUT_PULLUP);
  Serial.println("Done Setup!");
}

void loop() {
  if(digitalRead(DISPENSESTOCKFLAG) != HIGH){ //Check if we have to dispence
    TargetDist = indexFWD(TargetDist);        //call index forward function
    Serial.println("DISPENSE");
  }
  if(digitalRead(BUTTON) != HIGH){            //check if we have to restock
    Serial.println("RESTOCK");
    TargetDist = indexBWD(TargetDist);        //call index backward function
    analogWrite(RESTOCKFLAG, 153);          //tell ESP32 restocking done
    delay(1000);                              //wait for ESP32 to see flag
    digitalWrite(RESTOCKFLAG, LOW);           //turn off restock flag 
    delay(20000);
  }
}
/*
Param: Target Distance to go to
Return: Updated target distance
function:indexes stepper forward by 1 toy distance when called
*/
long indexFWD(long TargetDist){ 
//  Serial.print("FWD Target");   
//  Serial.println(TargetDist);            

  Serial.println(TargetDist);   
  stepperX.moveTo(TargetDist);  // Set new moveto position of Stepper
  
  stepperX.runToNewPosition(TargetDist += step);

  return TargetDist;
  }
/*
Param: Target Distance to go to
Return: Updated target distance
function:indexes stepper backward by 1 toy distance when called
*/
long indexBWD(long TargetDist){
  Serial.print("BWD Target");
  Serial.println(TargetDist);  
  
  stepperX.moveTo(TargetDist);  // Set new moveto position of Stepper
  Serial.print("distance to go");
  Serial.println(stepperX.distanceToGo());  

  stepperX.runToNewPosition(TargetDist -= step);
  return TargetDist;
  }
