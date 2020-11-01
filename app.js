// [Starting banner]
console.log('Code start.');
console.log('Test app for realying mqtt messages between topics.');

// [Settings]
// Configuration settings
//var getconfig = process.argv[2];
//var argconfig = JSON.parse(getconfig);
//console.log(argconfig);
var config = JSON.parse(Buffer.from(require('./config.js'), 'base64').toString());
//var broker = config.broker;
var broker = config.globalsettings.broker;
var logtopic = config.globalsettings.logtopic;
var banner = config.appsettings.banner;

console.log(config);
console.log(config.broker);
console.log(config.globalsettings.broker);
console.log(config.previousnode);
console.log(config.nextnode);
console.log(config.mynodeid);
//console.log(config.rxtopic);
//console.log(config.txtopic);
// [Libraries]
const l = require('mqttlogger');
var mqttmod = require('mqttmod');

// Good morning
mqttmod.send(broker,logtopic,banner,finalizeSending);

// [Functions]
function sendToNext(msg){
        console.log(msg);
        mqttmod.send(broker,config.nextnode,msg,finalizeSending);
}

function finalizeSending() {
        l.log('INFO','Data sent to heatmap');
}

// [Execution]
mqttmod.receive(broker,config.mynodeid,sendToNext);

// [Ending banner]
console.log('Code end');
