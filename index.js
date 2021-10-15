
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

var robot = require("robotjs");

async function startKeySender() {

    for (let s in 5) {
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