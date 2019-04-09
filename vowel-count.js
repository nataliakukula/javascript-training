// Write a function that takes a string input: 'str'
// Return the number / count of vowels in the input string.
// For the purpose of this assignment, consider 'a', 'e', 'i', 'o' and 'u' as vowels
// the input string will consist of lower case letters

function countTheVowels(str) {
    // create a vowel set (array)
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    // initiallize a result array
    let result = [];
    // loop through the splitted array
    for (let i = 0; i < str.length; i++) {
        // if the element from splitted array is included in the vowel set
        if (vowels.includes(str[i])) {
            // push the vowel into the result array
            result.push(str[i]);
        }
    };
    // return the length of the result array
    return result.length;
}

let string = 'i love javascript';
console.log(countTheVowels(string));