
var robot = require("robotjs");
const utils = require('./Utils/utils');

async function HSloop() {
    let key = 'space';

    while(true) {
        console.log('Opening Card Pack')
        robot.keyTap(key);
        await utils.sleep(3000);

        console.log('Unveiling cards');
        let card_n = 5;
        for (let card_i = 0; card_i < card_n; card_i++) {
            robot.keyTap(key);
        }

        await utils.sleep(2000);
        console.log('Closing Pack');
        robot.keyTap(key);
    }
}

async function infiniteLoop() {
    let key = 'space';

    while (true) {
        await utils.sleep(1000);
        console.log(`Pressing ${key}`)
        robot.keyTap(key);
    }
}

async function startKeySender() {

    let seconds = 5;
    for (let s = seconds; s >= 0; s--) {
        console.log(`Starting in ${s}`);
        await utils.sleep(1000);
    }

    console.log('Loop starting');

    HSloop();
    //infiniteLoop();
}

startKeySender();