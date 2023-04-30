let x = "this is a private message";
function log(message) {
 console.log(message);
}
module.exports.log = log;
console.log(module);