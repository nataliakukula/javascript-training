// s is the string that represents going down and up through valleys and montains
const s = "UDUUUDUDDD"
// calculate the number of valley someone goes through

function countingValleys(s) {
    // every step gets added to the stack
    // when you have an U, you need a D to go back
    // when you have a D, you need a U
    // the question is, how many times you go back to level 0, whne you're coming from the valley
    let steps = s.split("");
    let stepStack = 0;
    let vallies = 0;

    for (let i = 0; i < steps.length; i++) {

        if (steps[i] === "U") {
            stepStack++
        } else if (steps[i] === "D") {
            stepStack--
        }

        if (stepStack === 0 && steps[i] === "U") {
            vallies++
        }
    };

    return vallies;

}

countingValleys(n, s);