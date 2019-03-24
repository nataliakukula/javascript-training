// Calculate the average, mean of elements in the array
// MEAN is calucated by adding all ements and dividing them by their "number"

let numbers = [3, 4, 6, 33, 2, 15];

function mean(numbers) {
    let accumulator = 0;

    for (let i = 0; i < numbers.length; i++) {
        accumulator += numbers[i];
    };

    return accumulator / numbers.length
}

let result = mean(numbers);

console.log(result)