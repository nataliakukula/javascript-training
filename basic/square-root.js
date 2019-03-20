//Check if a number is a square of 2 -> check if a number equals 1.41...
function isSquareof2(number) {
    return number === Math.sqrt(2);
}
console.log(isSquareof2(1.4142135623730951));

// Check if an integer is a sqare root
function isSquare(number) {
    return Math.sqrt(number) % 1 === 0;
};
console.log(isSquare(9))