// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

let str = "xooxx";

function XO(str) {

    let string = str.toLowerCase();
    let o = 0;
    let x = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "o") {
            o++;
        } else if (string[i] === "x") {
            x++;
        }
    };

    if (x === o) {
        return true;
    } else {
        return false;
    }

}

console.log(XO(str));