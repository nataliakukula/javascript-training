// Reverse word order of a sequence without changing the punctuation -> time complexity O(n) ?
const sentence = "Where does high self esteem, my dear, come from?"

const reverseSentence = sentence => {

    sentence = sentence.trim().split(" ");

    for (let i = 0; i < Math.floor(sentence.length / 2); i++) {

        //traverse elements in place
        let temporaryElement = sentence[i];
        sentence[i] = sentence[sentence.length - i - 1];
        sentence[sentence.length - i - 1] = temporaryElement;

        // if last index of element is equeal a special character 
        let lastCharacter = sentence[i][sentence[i].length - 1];

        if (lastCharacter === "," || lastCharacter === "?" || lastCharacter === ";" || lastCharacter === "!") {
            // remove it from that element
            sentence[i] = sentence[i].slice(0, -1);
            // add it to the element it's being swiched with
            sentence[sentence.length - i - 1] = sentence[sentence.length - i - 1].concat(lastCharacter);
        }

    };

    return sentence.join(" ");

}

console.log(reverseSentence(sentence));