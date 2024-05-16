// import os from "os";
// console.log(os.release());
// console.log(os.version());
// console.log(os.cpus());
// console.log(os.freemem());

import fs from "fs";
fs.writeFileSync("hello.txt", "hello, welcome to MERN");
fs.appendFileSync("hello.txt", "i dont know whats going on");
