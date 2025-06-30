function objectToJsonString(obj) {
    return JSON.stringify(obj);
}


const jsonStr = objectToJsonString({ name: "Alice", age: 25 });
console.log(jsonStr);
