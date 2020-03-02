// [Starting banner]
console.log('Code start.');
console.log('Triangulating client mqtt data.');

// [Settings]
// retrieve the configuration settings
var config = require('./config.js');

// [Libraries]
var mqttmod = require('./mqttmod.js')
var filter = require('./filter.js');
//var trilaterator = require('./trilaterator.js');

// [Global variables]
var data = [];

// [Functions]
function sendToAggregator(msg){
//	console.log(msg);
	mqttmod.send(config.mqttBroker,config.mqttAggregatorTopic,msg);
}

function filterMessages(msg) {
	// Example of receiving data
	// {"uidTimestamp":"ODQ6MWI6NWU6NmM6ZTQ6ODIuMTUzMjA0MjAzNA==","signalArray":[{"did":10,"rssi":-93},{"did":10,"rssi":-93},{"did":10,"rssi":-93},{"did":10,"rssi":-93}]}
	console.log('Inside filterMessages');
	console.log(msg);
	measurement = filter.removeDuplicates(JSON.parse(msg));
	console.log(measurement);
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
mqttmod.receive(config.mqttBroker,config.mqttTrilateratorTopic,sendToAggregator);
//mqttmod.receive(config.mqttBroker,config.mqttTrilateratorTopic,filterMessages);

// [Ending banner]
console.log('Code end');
