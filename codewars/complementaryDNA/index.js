function DNAStrand(dnaString) {
    //store the results in a temporary arry
    let dnaResult = [];
    //break down the string into an array
    let dnaArray = dnaString.split("");
    //loop through the array and 
    for (let i = 0; i < dnaArray.length; i++) {
        // console.log(dnaArray[i]);

        //match the letters to their counterparts
        //push the results to an array
        if (dnaArray[i] == "A") {
            dnaResult.push("T");
        }
        if (dnaArray[i] == "T") {
            dnaResult.push("A");
        }
        if (dnaArray[i] == "C") {
            dnaResult.push("G");
        }
        if (dnaArray[i] == "G") {
            dnaResult.push("C");
        }
    };
    //join the results to return a string
    return dnaResult.join("");
}

DNAStrand("CAGAT");