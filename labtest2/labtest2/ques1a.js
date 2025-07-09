const fs = require('fs');

function readAndLogFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file at ${filePath}:`, err.message);
            return;
        }
        console.log(`Contents of ${filePath}:\n`);
        console.log(data);
    });
}
// Example usage
readAndLogFile('example.txt');
