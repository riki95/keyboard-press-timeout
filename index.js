
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

var robot = require("robotjs");

async function startKeySender() {

    while (true) {
        await sleep(1000);
        robot.keyTap("space");
    }
}

startKeySender();