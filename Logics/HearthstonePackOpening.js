async function HSloop() {
    let key = 'space';

    while(true) {
        console.log('Opening Card Pack')
        robot.keyTap(key);
        await utils.sleep(3000);

        console.log('Unveiling cards');
        let card_n = 5;
        for (let card_i = 0; card_i < card_n; card_i++) {
            robot.keyTap(key);
        }

        await utils.sleep(2000);
        console.log('Closing Pack');
        robot.keyTap(key);
    }
}

module.exports = { HSloop }