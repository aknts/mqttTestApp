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
        mqttmod.send(broker,config.nextnode,msg,finalizeSending);
}

var finalizeSending = function finalizeSending() {
        console.log('Message was sent.');
}

// Modules
const mqttmod = require('mqttmod');
const logger = require('mqttlogger')(broker, logtopic, mqttmod, finalizeSending);

// Code 
// Begin
console.log('Code start.');
console.log('Test app for realying mqtt messages between topics.');
logger.debug('Sending a debug event to a MQTT topic.');
logger.info('Sending an info event to a MQTT topic.');
logger.error('Sending an error event to a MQTT topic.');

// Send banner
mqttmod.send(broker,logtopic,banner,finalizeSending);

// Start recieving MQTT messages, upon getting them, relay them to the next node
mqttmod.receive(broker,config.mynodeid,sendToNext);

// Ending 
console.log('Code end');
