// Instructions for linear search
const stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];

const random_value = stuff[Math.floor(Math.random() * 14)];

// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value

function search(array, value) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === value) {
            console.log(array[i] + " = " + value);
            console.log("index:", i);
        }
    };
}

search(stuff, random_value)