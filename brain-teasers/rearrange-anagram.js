// Given two strings, write an algorithm to check if they are anagrams of each other.
// function returns alphabetically sorted string
const sortAnagram = anagram => {
    // if (!word) { return }
    anagram = anagram.split("")
    anagram = anagram.sort()
    anagram = anagram.join("")
    return anagram
}

// ES7 has default values passed, if inputs not provided with function call
const isAnagram = (anagram1 = "fried", anagram2 = "fired") => {

    if (sortAnagram(anagram1) === sortAnagram(anagram2)) {
        return true
    } else {
        return false
    }
}

console.log(isAnagram())

// Given an array of random anagrams, find matching words
const words = ["ko", "listen", "silent", "cat", "george", "act", "ok"]

const groupAnagrams = words => {

    const anagramMatches = {};

    words.forEach((word) => {

        const sortedWord = sortAnagram(word);

        if (anagramMatches[sortedWord]) {
            return anagramMatches[sortedWord].push(word);
        }

        anagramMatches[sortedWord] = [word];
    });

    return anagramMatches;
}

console.log(groupAnagrams(words))