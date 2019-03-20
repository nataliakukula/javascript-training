//Given 3 integers, how would you find the middle number?
//if they are in an array and are numbers
const numbers = [3, 44, 41];
function arrayMedium(array) {
    array.sort();
    return array[1];
}

console.log(arrayMedium(numbers));

const c = 2;
const a = 9;
const b = -10;

function integerMedium(a, b, c) {

    if (a > b && a < c || a > c && a < b) {
        return a;
    } else if (b > a && b < c || b > c && b < a) {
        return b;
    } else if (c > a && c < b || c > b && c < a) {
        return c;
    }

}

console.log(integerMedium(a, b, c));
