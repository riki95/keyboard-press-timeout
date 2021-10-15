var _ = require('underscore');


//Logics
const logic_Heartstone = require('./HearthstonePackOpening');
const logic_KeyPress = require('./InfiniteKeyPress');


function run(args) {
    let func = _.first(args);

    switch(func) {
        case 'hearthstone':
            logic_Heartstone.HSloop();
        case 'keypress':
            logic_KeyPress.infiniteLoop();
        default:
            console.log('Not a valid command. Please retry');
            return;
    }

}

module.exports = { run }