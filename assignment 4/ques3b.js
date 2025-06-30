const fs = require('fs');

function modifyJsonFile(filePath, modifyFn) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        let obj;
        try {
            obj = JSON.parse(data);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            return;
        }
        // Modify the object using the provided function
        modifyFn(obj);
        fs.writeFile(filePath, JSON.stringify(obj, null, 2), 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing file:', writeErr);
                return;
            }
            console.log('File updated successfully.');
        });
    });
}

modifyJsonFile('assignment 4/a.json', obj => { obj.updated = true; });
