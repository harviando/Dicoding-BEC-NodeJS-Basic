const fs = require('fs');
const {resolve} = require('path');

const writeableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));

writeableStream.write('This is the first line of text.\n');
writeableStream.write('This is the second line of text.\n');
writeableStream.write('This is the third line of text.\n');
writeableStream.write('This is the fouth line of text.\n');
writeableStream.end('This is the last line of text.');