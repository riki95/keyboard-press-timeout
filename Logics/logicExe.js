var _ = require('underscore');


//Logics
const logic_Heartstone = require('./HearthstonePackOpening');
const logic_KeyPress = require('./InfiniteKeyPress');


function run(args) {
    let func = _.first(args);
    console.log(`Funcionality: ${func}`)

    switch(func) {
        case 'hearthstone':
            logic_Heartstone.HSloop();
            break;
        case 'keypress':
            logic_KeyPress.infiniteLoop(args.slice(1));
            break;
        default:
            console.log('Not a valid command. Abort.');
            process.exit(0);
    }

}

module.exports = { run }