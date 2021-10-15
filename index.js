var robot = require("robotjs");
const utils = require('./Utils/utils');
const logic = require('./Logics/logicExe');



async function startKeySender(args) {

    let seconds = 5;
    for (let s = seconds; s >= 0; s--) {
        console.log(`Starting in ${s}`);
        await utils.sleep(1000);
    }

    logic.run(args);
}

let args = process.argv.slice(2);
startKeySender(args);