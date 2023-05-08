// note to myself: check async generators + 'for-await-of' & 'unix-like streams'

const fs = require('fs');
const path = require('path');
const fileName = 'text.txt';

let readStream = fs.createReadStream(path.join(__dirname, fileName));


readStream.pipe(process.stdout);