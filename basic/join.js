//Write a function that works like the javascript .join() method
const initialString = "Hello there beatuful!";
const string = initialString.split("");

function join(string) {
    let joinedString = "";
    // loop through the array and concatinate
    for (let i = 0; i < string.length; i++) {
        joinedString += string[i];

    };

    return joinedString
}

console.log(join(string));