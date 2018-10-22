var exec = require('cordova/exec');

//method name: add
module.exports.add = function(arg0, success, error){
    exec(succes, error, 'PluginTest', 'add', [arg0]);
}

module.exports.substract = function(arg0, success, error){
    exec(succes, error, 'PluginTest', 'substract', [arg0]);
}