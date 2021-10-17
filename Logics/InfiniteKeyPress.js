var robot = require("robotjs");

const utils = require('../Utils/utils');



async function keySingle(args) {
    let key = args[0] ? args[0] : await utils.askSingleInput('Insert button to press: ');
    let sec = args[1] ? args[1] : await utils.askSingleInput('Insert interval in seconds: ');

    console.log(`Starting KEYPRESS functionality for key ${key} each ${sec} seconds`);

    while (true) {
        await utils.sleep(sec * 1000);
        console.log(`Pressing ${key}`)

        try {
            robot.keyTap(key);
        }
        catch(err) {
            console.log(err);
            process.exit(0);
        }
        
    }
}

/* async function keySequence(args) {
    console.log('key sequence')
    if (args.length === 0) {
        args = utils.askSequenceInput('Insert arg: ');
    }

    while (true) {
        for (let key of args) {
            await utils.sleep(1000);
            console.log(`Pressing ${key}`)
            robot.keyTap(key);
        }
    }
} */

module.exports = { keySingle, /* keySequence */ }