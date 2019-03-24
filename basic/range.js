// A Range is the diffrence between the least and greatest value in a data set

let numbers = [3, 4, 6, 33, 2, 15];

function range(numbers) {

    numebers = numbers.sort((a, b) => a - b);
    return numbers[numbers.length - 1] - numbers[0];

}

let result = range(numbers);
console.log(result);