const { resolve } = require("path");
const readline = require('readline');
const { reject } = require("underscore");


//Wait functionalities

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}




// Functionalities for User Input Text

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

async function askUserInput(question) {
    return await prompt(question)
}




module.exports = { sleep, askUserInput };