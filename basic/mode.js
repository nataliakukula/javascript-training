// MODE represents the values that occurs most frequently
// A data set can have no modes, one mode, or multiple modes
let numbers = [3, 4, 6, 1, 33, 2, 15];

function mode(numbers) {
    // since there can be multiple, we need to store the results in an array
    let mode = [];
    let counter = 0;

    for (let i = 0; i < numbers.length; i++) {
        //since it's 0n^2 - we need to find multiples of one particular element
        //and count how many times it appears in the array
        let tempMode = numbers[i];
        let tempCount = 0;

        for (let j = 0; j < numbers.length; j++) {
            //if the number appears at least once increment the current counter
            if (tempMode === numbers[j]) {
                tempCount++;
            }
        };

        if (tempCount > counter) {
            // if the current counter is larger than the global counter
            // replace the mode/modes with the current mode
            let tempModeArray = [];
            tempModeArray.push(tempMode);
            mode = tempModeArray;
            counter = tempCount;

        } else if (tempCount === counter && !mode.includes(tempMode)) {
            // in the event there are multiple modes add them to the existing mode array
            mode.push(tempMode);
        };
    };
    // if we would display when the counter was 1,
    // we would have all the elemnts from the array returned
    // therefore we need to skip the instance of a single element
    if (counter <= 1) {
        return "Not found"
    } else {
        return mode.join(" & ");
    }
}

let result = mode(numbers);
console.log(result)