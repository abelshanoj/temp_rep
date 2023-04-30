const os = require('os');
console.log(`the total system time is${os.uptime}seconds`);
const user = os.userInfo();
console.log(user);
const data = {
 name: os.type(),
 release: os.release(),
 totalmem: os.totalmem(),
 availablemem: os.freemem()
};
console.log(data);