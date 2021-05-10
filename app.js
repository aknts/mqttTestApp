// Initialization 
// Config
const config = JSON.parse(Buffer.from(require('./config.js'), 'base64').toString());

// Settings
var broker = config.globalsettings.broker;
var logtopic = config.globalsettings.logtopic;
var banner = config.appsettings.banner+config.mynodeid;

// Functions
var sendToNext = function sendToNext(msg){
        console.log(msg);
        l.debug(msg);
        l.debug('Before check');
        if (msg == "stop") {
                l.debug('After check');
                throw 'Exiting';
        }
        mqttmod.send(broker,config.nextnode,msg);
}

var finalizeSending = function finalizeSending() {
        l.debug('Message was sent.');
}

// Modules
const mqttmod = require('mqttmod');
const l = require('mqttlogger')(broker, logtopic, mqttmod);

// Code 
// Begin
// Send banner
mqttmod.send(broker,logtopic,banner,finalizeSending);

// Start recieving MQTT messages, upon getting them, relay them to the next node
mqttmod.receive(broker,config.mynodeid,sendToNext);

// Ending 
l.debug('Test app started');
// Git test
// VSCode test
// VScode test 2