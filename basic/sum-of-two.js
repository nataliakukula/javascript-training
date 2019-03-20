//Array of 5 numbers - write a method that checks if the sum of two is equal to 10
// small data set (On^2)
let array = [4, 3, 6, 1, 5];

function isEqualto10(array, sum) {
    array.sort();
    let firstOperandIndex = 0;
    let lastIndex = array.length - 1;

    while (firstOperandIndex <= lastIndex) {
        let firstOperand = array[firstOperandIndex];
        let secondOperand = sum - array[firstOperandIndex]
        for (let i = 1; i < array.length; i++) {
            if (array[i] === secondOperand) {
                return firstOperand + " " + secondOperand
            } else {
                firstOperandIndex++;
            }
        };
    }
    return -1;
}

console.log(isEqualto10(array, 4));