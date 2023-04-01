# Map touchscreen to display 2 only
xinput map-to-output 2 HDMI1

# Start advertisement slideshow in fullscreen on display 1
feh -Y -x -q -D 15 -B black -F -Z -z -r /home/pi/Pictures

# Start Kioski Web App
chromium-browser --app=https://liswang24.github.io/kioski/ --start-fullscreen