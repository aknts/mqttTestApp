var config = {
	// Set message rate, anything under 10 and you are risking making the broker crush
	msgr: 10,
	// Set message rate, anything under 10 and you are risking making the broker crush
	reqr: 6000,
	// The mqtt broker url, post must be included
	mqttBroker: 'mqtt://itp17503.ddns.net:1883',
	// The mqtt topic that the aggregator receives its commands
	TrilateratorRxTopic: 'TrilateratorRx',
	// The mqtt topic that the data flows through
	TrilateratorTxTopic: 'TrilateratorTx',
	// The mqtt topic that the data flows through
	HeatmapTxTopic: 'HeatmapTx',
	// The username that we make the requests
	reqUser: 'mqttFilter',
	// The path to the logging lib
	logger: './logger.js'
};

module.exports = config;
