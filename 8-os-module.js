const os=require('node:os');

//hostname print
const hostname=os.hostname();
console.log('Hostname:'+hostname);

//userinfo
const user=os.userInfo()
console.log(user);

//uptime
console.log(`The system uptime ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
    totalMem:os.totalmem(),
}
console.log(currentOs);