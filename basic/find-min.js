// Find the smallest number in an array
let numbers = [8, 0, 33, 1, -1];

function findMin(numbers) {

    numebers = numbers.sort((a, b) => a - b);

    return numbers[0];
}

let result = findMin(numbers);

console.log(result)