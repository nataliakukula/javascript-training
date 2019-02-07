function shortestWord(stringOfWords) {
    let stringArray = stringOfWords.split(/[ ,.?!]+/).filter(n => n);
    let shortestElement;
    console.log(stringArray);

    for (let i = 0; i < stringArray.length; i++) {
        let temporaryElement = stringArray[i];
        for (let j = 1; j < stringArray.length; j++) {
            if (temporaryElement.length < stringArray[j].length) {
                stringArray[i] = stringArray[j];
                stringArray[j] = temporaryElement;
            };
            shortestElement = temporaryElement;
            console.log("shortest element: ", shortestElement);
        };
    };
    return shortestElement
};

shortestWord("My name is Natalia Kukula and I suck at algorithms.");
shortestWord("Booo! Why are you so cruel?");