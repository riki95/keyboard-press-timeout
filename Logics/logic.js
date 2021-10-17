var _ = require('underscore');

const LOGIC = {
    KEYPRESS: 'keypress',
    HEARTHSTONE: 'hearthstone'
};

//Logics
const logic_Heartstone = require('./HearthstonePackOpening');
const logic_KeyPress = require('./InfiniteKeyPress');


function run(args) {
    let func = _.first(args);
    console.log(`Funcionality: ${func}`)

    switch(func) {
        case LOGIC.HEARTHSTONE:
            logic_Heartstone.HSloop();
            break;
        case LOGIC.KEYPRESS:
            logic_KeyPress.keySingle(args.slice(1));
            break;
        // case 'keysequence':
        //     logic_KeyPress.keySequence(args.slice(1));
        //     break;
        default:
            console.log('Not a valid command. Abort.');
            process.exit(0);
    }
}

module.exports = { LOGIC, run }