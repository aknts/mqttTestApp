// [Starting banner]
console.log('Code start.');
console.log('Triangulating client mqtt data.');

// [Settings]
// Configuration settings
var config = require('./config.js');

// [Libraries]
const l = require(config.logger);
var mqttmod = require('./mqttmod.js');

// [Libraries]
var mqttmod = require('./mqttmod.js')

// [Global variables]
var data = [];

// [Functions]
function sendToHeatmap(msg){
	console.log(msg);
	mqttmod.send(config.mqttBroker,config.HeatmapTxTopic,msg,finalizeSending);
}

function finalizeSending() {
	l.log('INFO','Data sent to heatmap');
}	

/*
function ogfiltersend(msg){
			case 'message':
				//a new measurement arrives, process the new measurement and when done inform for another
				measurement = filter.removeDuplicates(connectionState.payload);

				l.debug('Received and filtered one measurement: ' + JSON.stringify(connectionState.payload));

				trilaterator.process(measurement, function(err, result){
					if (err){l.error(err);}
					else {
						if (result){
							l.debug(JSON.stringify(result));
							data.push(result);
						}
					}
					lbClient.ready(connectionState.connection);
				});
				break;
}
*/
// [Execution]
mqttmod.receive(config.mqttBroker,config.TrilateratorRxTopic,sendToHeatmap);
//mqttmod.receive(config.mqttBroker,config.mqttTrilateratorTopic,filterMessages);

// [Ending banner]
console.log('Code end');
