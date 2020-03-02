#!/bin/bash
# --------------------------------------
# Trilaterator Build Script
# --------------------------------------
COMPONENT="Trilaterator"
echo "$COMPONENT build script"

apt-get update
apt-get -y install git
apt-get -y install nodejs
apt-get -y install npm
npm config set strict-ssl false
npm install forever -g

APP_PATH="/opt/mqttTrilerator"
cd $APP_PATH

# git clone http://snf-825292.vm.okeanos.grnet.gr/ktserpes/ScalableTrilateration.git
wget https://raw.githubusercontent.com/aknts/mqttStrand/master/mqttTrilaterator/app.js
wget https://raw.githubusercontent.com/aknts/mqttStrand/master/mqttTrilaterator/config.js

LOG_PATH="$APP_PATH/logs"
mkdir $LOG_PATH
fileout="$LOG_PATH/$COMPONENT_$(date +%Y-%m-%d.%H:%M:%S).out"
fileerr="$LOG_PATH/$COMPONENT_$(date +%Y-%m-%d.%H:%M:%S).err"
forever start -o $fileout -e $fileerr -a $COMPONENT_PATH/app.js`
