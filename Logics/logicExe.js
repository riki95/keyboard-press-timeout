var _ = require('underscore');


//Logics
const logic_Heartstone = require('./HearthstonePackOpening');
const logic_KeyPress = require('./InfiniteKeyPress');


function run(args) {
    let func = _.first(args);

    console.log(func);

}

module.exports = { run }