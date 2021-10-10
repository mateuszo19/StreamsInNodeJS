const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

const openFileStream = createReadStream('ok.png');
const writeFileStream = createWriteStream('ok2.png');

(async () => {
    await pipeline(
        openFileStream,
        writeFileStream,
    );
    console.log('Done!')
})();
