// Write a function that returns the first duplicate 
const string = "gramalka";

function findFirstDuplicate(text) {
    text = text.split("");
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            if (text[i] === text[j]) {
                return text[j];
            }
        };
    };
};

console.log("First duplicate in a string: ", findFirstDuplicate(string));

//Find first duplicate in an array
let array = [3, 5, 6, 8, 5, 3];

function firstDuplicate(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            return array[i];
        } else {
            newArray.push(array[i]);
        }
    };
};

console.log("First duplicate in an array of numbers: ", firstDuplicate(array));
