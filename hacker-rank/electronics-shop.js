//Need to buy a keyboard and a drive that is the largest price below the budget
let keyboards = [10, 15, 20];
let drives = [5, 8];
let b = 16;

function getMoneySpent(keyboards, drives, b) {
    // if the sum of two elements from arrays is closest to the budgest return the sum
    // else if she can't buy two elements, print -1
    let moneySpent = 0;

    for (let i = 0; i < keyboards.length; i++) {

        for (let j = 0; j < drives.length; j++) {

            let potentialPurchase = keyboards[i] + drives[j];

            if (potentialPurchase > moneySpent && potentialPurchase <= b) {
                moneySpent = potentialPurchase;
            };
        };
    };

    if (moneySpent === 0) {
        return -1;
    } else {
        return moneySpent;
    }
};

let spendings = getMoneySpent(keyboards, drives, b);
console.log(spendings);