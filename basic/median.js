// Median is the middle value of the ordered set of data
// or the mean of two middle values if the set is even

let numbers = [3, 4, 6, 33, 2, 15];

function median(numbers) {
    let median = 0;
    numebers = numbers.sort((a, b) => a - b);

    if (numbers.length % 2 === 0) {
        median = (numbers[Math.floor(numbers.length / 2) - 1] + numbers[Math.floor(numbers.length / 2)]) / 2
    } else {
        median = numbers[Math.floor(numbers.length / 2)]
    }

    return median
}

let result = median(numbers);
console.log(result);