let l = 2;
let r = 14;

// odd numbers 3, 5, 7, 9, 11, 13
function findOddNumbers(l, r) {
    let arr = [];

    if (l % 2 === 0) {
        l += 1;
    }

    for (let i = l; i < r + 1; i += 2) {
        arr.push(i);
    };

    return arr;
}

let result = findOddNumbers(l, r);

console.log(result)