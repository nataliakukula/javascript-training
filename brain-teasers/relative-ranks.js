// Given an array of scores, return their ranking
// const scores = [2, 3, 2, 10, 19, 19, 5]; -> TODO if scores would duplicate, would have to increment the index one time less
// rankings = [6, 5, 6, "gold", "bronze", "gold", 4] 
const scores = [4, -3, 20, 1, 6];

const getRankings = (scores) => {
    const hashMap = {};
    let result = [...scores];

    for (let i = 0; i < scores.length; i++) {
        scores.sort((a, b) => b - a);

        // values need to start at 1
        hashMap[scores[i]] = i + 1;

        if (i === 0) {
            hashMap[scores[i]] = "gold";
        } else if (i === 1) {
            hashMap[scores[i]] = "silver";
        } else if (i === 2) {
            hashMap[scores[i]] = "bronze";
        }
    };
    for (let i = 0; i < result.length; i++) {
        // replace the value based on it's hashmap match
        result[i] = hashMap[result[i]]

    };

    console.log(result);
}

getRankings(scores);
