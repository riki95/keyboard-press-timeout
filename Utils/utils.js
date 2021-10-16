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

async function askSingleInput(question) {
    return prompt(question)
}

function askSequenceInput(question) {
    let answers = [];
    let current_answer = '';

    while (true) {
        current_answer = askSingleInput(question);

        if (current_answer != 'q') {
            break;
        }

        answers.push(current_answer);
    }

    return answers;
    
}


module.exports = { sleep, askSingleInput, askSequenceInput };