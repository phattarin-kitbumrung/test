var mongojs = require('mongojs');
var databaseUrl = '54.169.110.164:27017/minizymint';
var collections = ['todolist'];
var connect = mongojs(databaseUrl, collections);

module.exports = {
	connect: connect
};
