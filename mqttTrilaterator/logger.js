module.exports = {
	log: function(level, message){
		console.log('['+(new Date())+'] [' + level + '] ['+ message + ']');
	},
	error: function(message){
		this.log('ERROR', message);
	},
	info: function(message){
		this.log('INFO', message);
	},
	debug: function(message){
		this.log('DEBUG', message);
	},
	blank: function(message){
		console.log(message);
	},	
};