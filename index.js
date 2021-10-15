
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

var ks = require('node-key-sender');

async function startKeySender() {

    while (true) {
        await sleep(1000);
        ks.sendKey('space');
    }
}

startKeySender();
