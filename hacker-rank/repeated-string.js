// take a infinate repeated string
// calculate the number of occurences of "a" in the substing
//length of substing
n = 10;
// repeated sting;
s = "aba";

function repeatedString(s, n) {

    let numberInSubstring = s.split('').filter(item => item === "a").length;
    let stringRemainder = n % s.length;
    let numberOfConcat = Math.floor(n / s.length);
    let numberOfOccurences = numberOfConcat * numberInSubstring;

    for (let i = 0; i < stringRemainder; i++) {
        if (s.charAt(i) === "a") {
            numberOfOccurences++
        }
    };

    return numberOfOccurences;
}

repeatedString(s, n);