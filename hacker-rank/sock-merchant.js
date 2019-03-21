// given an array of socks, return the number of pairs available for sale
// n is the number of socks
// n = 7;
// n = 9;
n = 10;
// ar is the selection of colors
// ar = [1, 2, 1, 2, 1, 3, 2];
// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]

function sockMerchant(n, ar) {
    //loop through the array ar
    let set = [];
    let pairs = 0;
    ar.sort();

    for (let i = 0; i < n; i++) {
        console.log(set);
        console.log(pairs);
        // if a number exists on the set, take it off 
        if (set.includes(ar[i])) {
            set.pop();
            // & increment pairs
            pairs++;
        } else {
            //else push the first number on the set
            set.push(ar[i]);
        }
    };

    return pairs;

}

let pairs = sockMerchant(n, ar);
console.log(pairs);