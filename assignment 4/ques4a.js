function parseJsonString(jsonString) {
    try {
        const obj = JSON.parse(jsonString);
        return obj;
    } catch (err) {
        console.error('Error parsing JSON string:', err.message);
        return null;
    }
}


const result = parseJsonString('{"name":"Alice"}');
console.log(result);
