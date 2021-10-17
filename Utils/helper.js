const logic = require('../Logics/logic');

function askInfo() {
    console.log(`Find below instructions to run the program:
                Run "npm start" to run the program without a preset
            `);

    for (let func of Object.values(logic.LOGIC)) {
        console.log(`
                Run "npm run ${func}" for ${func} functionality
            `);
    }
}


module.exports = { askInfo }