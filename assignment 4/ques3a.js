const fs = require('fs');

function logFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(data);
    });
}

logFileContent('assignment 4/a.txt');
