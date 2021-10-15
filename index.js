var robot = require("robotjs");
var _ = require('underscore');

const utils = require('./Utils/utils');
const logic = require('./Logics/logicExe');

async function waitForStart() {
    let seconds = 5;
    for (let s = seconds; s >= 0; s--) {
        console.log(`Starting in ${s}`);
        await utils.sleep(1000);
    }
}


async function startKeySender(args) {
    //waitForStart();
    

    if (args.length === 0) {
        //TODO: run dynamic logic
        console.log('Dynamic logic here');
        return; //remove return when functionality is ready
    }

    if (_.first(args) === '-h') {
        //TODO: run helper here
        console.log('Helper here');
        return;
    }


    logic.run(args);
}

console.log(process.argv)
let args = process.argv.slice(2);
startKeySender(args);