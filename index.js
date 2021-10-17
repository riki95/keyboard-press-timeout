var _ = require('underscore');

const helper = require('./Utils/helper');
const utils = require('./Utils/utils');
const logic = require('./Logics/logic');



function checkIfKnownFunc(funcName) {
    return Object.values(logic.LOGIC).includes(funcName) ? true : false;
}


async function startKeySender(args) {

    if (args.length === 0) {
        args[0] = await utils.askSingleInput('Insert functionality name: ');
    }
    
    if (_.first(args) === 'help') {
        helper.askInfo();
        process.exit(0);
    }

    if (!checkIfKnownFunc(_.first(args))) {
        console.log(`Unknown function: ${_.first(args)}. \n Run help to see available functions.`);
        process.exit(0);
    }

    //WAIT before start
    let seconds = 5;
    for (let s = seconds; s >= 0; s--) {
        console.log(`Starting in ${s}`);
        await utils.sleep(1000);
    }


    console.log('start logic')
    logic.run(args);
}

let args = process.argv.slice(2);
startKeySender(args);