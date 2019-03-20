// Reverse an array
// array.reverse()

// use a new array -> without using the built in reverse functionality
let array = [1, 3, 5, 4, 9, 10, 22];
function reverseArray(arr) {
    var newArray = [];
    // i equals to 5, stop when i no longer larger or equal to 0, decrement
    for (var i = arr.length - 1; i >= 0; i--) {
        //push the last element of the array first
        newArray.push(arr[i]);
    }
    return newArray;
}

console.log(reverseArray(array));

// Reverse array in place -> without creating a new array
function reverseArrayInPlace(array) {
    //i equals to 0, when smaller or euqal to 6 - 1 / 2, increment
    for (var i = 0; i <= Math.floor((array.length - 1) / 2); i++) {
        //grab the first element
        let temporaryElement = array[i];
        // push the last element into the place of the first element 6 - 1 - 0 -> 5 / 6 - 1 - 1 -> 4
        array[i] = array[array.length - 1 - i];
        // push the first element into the place of the last element
        array[array.length - 1 - i] = temporaryElement;
    }

    return array;
}
console.log(reverseArrayInPlace(array));

