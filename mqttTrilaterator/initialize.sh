#!/bin/bash
# --------------------------------------
# Trilaterator Build Script
# --------------------------------------
COMPONENT="Trilaterator"
echo "$COMPONENT build script"

sudo apt-get update
sudo apt-get -y install git
sudo curl -sL https://deb.nodesource.com/setup_13.x | bash -
apt-get install -y nodejs
sudo apt-get -y install npm
sudo npm config set strict-ssl false
sudo npm install forever -g
APP_PATH="/opt/mqttTrilerator"
LOG_PATH="$APP_PATH/logs"
cd $APP_PATH
# git clone http://snf-825292.vm.okeanos.grnet.gr/ktserpes/ScalableTrilateration.git
sudo wget https://raw.githubusercontent.com/aknts/mqttStrand/master/mqttTrilaterator/app.js
sudo wget https://raw.githubusercontent.com/aknts/mqttStrand/master/mqttTrilaterator/config.js
fileout="$LOG_PATH/$COMPONENT_$(date +%Y-%m-%d.%H:%M:%S).out"
fileerr="$LOG_PATH/$COMPONENT_$(date +%Y-%m-%d.%H:%M:%S).err"
sudo forever start -o $fileout -e $fileerr -a $COMPONENT_PATH/app.js`