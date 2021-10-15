
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

var robot = require("robotjs");

async function startKeySender() {

    let seconds = 5;
    for (let s = seconds; s >= 0; s--) {
        console.log(`Starting in ${s}`);
        await sleep(1000);
    }

    console.log('Loop starting');
    let key = 'space';

    while (true) {
        await sleep(1000);
        console.log(`Pressing ${key}`)
        robot.keyTap(key);
    }
}

startKeySender();