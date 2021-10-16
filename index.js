var _ = require('underscore');



const helper = require('./Utils/helper');
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
        args[0] = await utils.askSingleInput('Insert functionality name: ');
    }

    if (_.first(args) === 'help') {
        helper.askInfo();
        process.exit(0);
    }

    console.log('start logic')
    logic.run(args);
}

let args = process.argv.slice(2);
startKeySender(['hearthstone']);