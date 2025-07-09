const fs = require('fs');

function updateJsonFile(filePath, keyToUpdate, newValue) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading JSON file at ${filePath}:`, err.message);
            return;
        }

        let jsonObject;
        try {
            jsonObject = JSON.parse(data);
        } catch (parseErr) {
            console.error(`Error parsing JSON data:`, parseErr.message);
            return;
        }

        jsonObject[keyToUpdate] = newValue;

        const updatedJson = JSON.stringify(jsonObject, null, 4); // formatted

        fs.writeFile(filePath, updatedJson, 'utf8', (writeErr) => {
            if (writeErr) {
                console.error(`Error writing JSON file:`, writeErr.message);
                return;
            }
            console.log(`Successfully updated '${keyToUpdate}' in ${filePath}`);
        });
    });
}

// Example usage
updateJsonFile('data.json', 'name', 'T');
