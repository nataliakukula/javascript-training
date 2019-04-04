//Write a function that retuns the product of all numbers
// except for the number at which the pointer index is at
// input [1, 2, 3, 4]
// output [24, 12, 8, 6]

// O(n^2)
// we'll need an array to store our new products, so create an array to store these values
// start by looping through the input array given
// set our product value to default at 1
// for each item in the array, loop through the input again
// if the array indexes don't match, calculate the product by taking the initial product value of 1, and multiplying
// it by the array index value, this will give the product of the remaining integers in the array
// push the product to the empty array that we initialized to store the product

let arr = [1, 2, 3, 4];
// output [24, 12, 8, 6]

function createProduct(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let productValue = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                productValue = productValue * arr[j];
            }
        };
        newArr.push(productValue);
    };
    return newArr;
}

console.log(createProduct(arr))