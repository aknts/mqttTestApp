// [Starting banner]
console.log('Code start.');
console.log('Test app for realying mqtt messages between topics.');

// [Settings]
// Configuration settings
console.log(process.env.appconfig);
var config = require('./config.js');

// [Libraries]
const l = require('./logger.js');
var mqttmod = require('./mqttmod.js');

// [Functions]
function sendToNext(msg){
	console.log(msg);
	mqttmod.send(config.mqttBroker,config.TxTopic,msg,finalizeSending);
}

function finalizeSending() {
	l.log('INFO','Data sent to heatmap');
}	

// [Execution]
mqttmod.receive(config.mqttBroker,config.RxTopic,sendToNext);

// [Ending banner]
console.log('Code end');
