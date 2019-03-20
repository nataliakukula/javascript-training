//Given "n" people find total number of pairs that can be formed -> RECURSION
let pairCount = 0;

function findNumberOfPairs(n, count) {

    if (n <= 1) {
        return count
    }

    count++

    return findNumberOfPairs(n - 2, count);
}

console.log(findNumberOfPairs(25, pairCount));

// Non-recursive variant
function findPairs(n) {

    return Math.floor(n / 2);

}

console.log(findPairs(8));
