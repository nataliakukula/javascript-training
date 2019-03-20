//Take the input of number of people and return the sum of handshakes -> Permutations

//    A  B   C    D   E
// A [] [x] [x] [x] [x]
// B [] [] [x] [x] [x]
// C [] [] [] [x] [x]
// D [] [] [] [] [x]
// E [] [] [] [] []

// n * (n-1) / 2

function sumOfHandshakes(n) {
    return (n * (n - 1)) / 2
}

console.log(sumOfHandshakes(7));