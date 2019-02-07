function positiveSum(arr) {

    let sum = arr.reduce(function (accumulator, value) {
        return value > 0 ? accumulator + value : accumulator;
    }, 0);

    return sum
}

positiveSum([-2, 2, 4, -1]);