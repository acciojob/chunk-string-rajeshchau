function stringChop(str, size) {
    if (!str) return []; // Check for null or empty string

    size = Number(size); // Convert size to number
    let newarray = [];

    for (let i = 0; i < str.length; i += size) {
        newarray.push(str.substring(i, i + size));
    }

    return newarray;
} 

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
