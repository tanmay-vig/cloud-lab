
function multiply(arr)
{
    for (i = 0; i < arr.length; i++)
    {
        arr[i] *= 2;
    }
    return arr;
}

arr = [1, 2, 3, 4, 5];
console.log("Original array: " + arr);
console.log("Array after multiplication by 2:");
console.log(multiply(arr));