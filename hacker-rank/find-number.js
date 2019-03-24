//find if number k exists in an array
//return YES or NO

let arr = [8, 0, 33, 1, -1];
let k = 2;

function findNumber(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(k)) {
            return "YES"
        } else {
            return "NO"
        }
    };

}

let result = findNumber(arr, k);

console.log(result)