// Welcome.In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer
// 1234 => 14916
// 25 => 425

let num = 100;

function squareDigits(num) {
    //take the nuber and turn it into a string
    num = String(num);
    //split the string into an array
    let array = num.split('');
    // reduce because we have one output? --> accumulate to the result of square?
    let newArray = array.reduce((accum, element) => {
        element = element * element;
        return Number(accum += String(element))
    }, 0);
    // turn it back to an integer and return
    return newArray;
}

console.log(squareDigits(num));