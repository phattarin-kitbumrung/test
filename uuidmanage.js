var uuid = require('uuid');

//generate uid value
exports.generateuuid = function() {   
   var result = uuid.v4();
   //console.log(result);
    return result;
};