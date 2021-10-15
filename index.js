var robot = require("robotjs");
const utils = require('./Utils/utils');



async function startKeySender() {




    let seconds = 5;
    for (let s = seconds; s >= 0; s--) {
        console.log(`Starting in ${s}`);
        await utils.sleep(1000);
    }


    console.log('Loop starting');

    //HSloop();
    //infiniteLoop();
}

var args = process.argv.slice(2);
console.log(args);

startKeySender();