#!/bin/bash
	# --------------------------------------
	# Trilaterator Build Script
	# --------------------------------------
	COMPONENT="Trilaterator"

	echo "$COMPONENT build script"

	apt-get update
	apt-get -y install git
	curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
	apt-get -y install nodejs
	apt-get -y install npm
	npm config set strict-ssl false
	npm install forever -g

	ROOT_PATH=~
	cd $ROOT_PATH

	APP_PATH="$ROOT_PATH/mqttTrilerator"
	sudo rm -rd $APP_PATH
	sudo mkdir $APP_PATH

	cd $APP_PATH
	# git clone http://snf-825292.vm.okeanos.grnet.gr/ktserpes/ScalableTrilateration.git
	sudo wget https://raw.githubusercontent.com/aknts/mqttStrand/master/mqttTrilaterator/app.js
	sudo wget https://raw.githubusercontent.com/aknts/mqttStrand/master/mqttTrilaterator/config.js

	COMPONENT_PATH="$APP_PATH"
	CONFIG_PATH="$COMPONENT_PATH/config.js"


	LOG_PATH="$APP_PATH/logs"
	sudo mkdir $LOG_PATH
	fileout="$LOG_PATH/$COMPONENT_$(date +%Y-%m-%d.%H:%M:%S).out"
	fileerr="$LOG_PATH/$COMPONENT_$(date +%Y-%m-%d.%H:%M:%S).err"
	forever start -o $fileout -e $fileerr -a $COMPONENT_PATH/app.js`