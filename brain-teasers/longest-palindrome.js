//Find the longest palindromic substring in a string

const string = "abaxabaxabb";

function longestPalindrome(string) {
    // the lenght of the substring of half of the array finds the longest palindrome
    // if lengs is 3 or 5 or 6
}

// data validation function
function isPalindrome(string) {
    let reversed = string.split("").reverse().join("");
    return string == reversed;
}

function longestPalindrome(string) {

    let maxLength = 0;
    let longestPalindrome = "";

    for (let i = 0; i < string.length; i++) {

        let substring = string.substr(i, string.length);

        for (let j = substring.length; j >= 0; j--) {
            let newSubstring = substring.substr(0, j);
            if (newSubstring.length <= 1)

                continue;

            if (isPalindrome(newSubstring)) {
                if (newSubstring.length > maxLength) {
                    maxLength = newSubstring.length;
                    longestPalindrome = newSubstring;
                }
            }
        }
    }

    return longestPalindrome;
}

console.log(longestPalindrome("abracadabra"));

console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 