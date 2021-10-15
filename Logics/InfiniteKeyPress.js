async function infiniteLoop() {
    let key = 'space';

    while (true) {
        await utils.sleep(1000);
        console.log(`Pressing ${key}`)
        robot.keyTap(key);
    }
}

module.exports = { infiniteLoop }