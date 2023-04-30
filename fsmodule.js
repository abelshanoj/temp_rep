//const fs = require('fs');
/*let result = fs.readdirSync('./');
console.log(result);*/
//fs.readdir('./', function (err, files) {
//if (err) console.log('error:', err);
//else console.log('result: ', files);
//});
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(`this is the text file${first},${second}`);
writeFileSync('./content/result.txt', `here is the result ${first}, ${second}`, { flag: 'a' });