const utils = require('../Utils/utils');
var robot = require("robotjs");


async function infiniteLoop(args) {
    let key = args[0] ? args[0] : await utils.askUserInput('Insert button to press: ');

    while (true) {
        await utils.sleep(1000);
        console.log(`Pressing ${key}`)
        robot.keyTap(key);
    }
}

module.exports = { infiniteLoop }