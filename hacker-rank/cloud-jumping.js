// Emma is playing a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  1 or 2.
// She must avoid the thunderheads.
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud.
// It is always possible to win the game.

// binary clouds -> 1 is to be avoinded, 0 can be jumped on
let c = [0, 1, 0, 0, 0, 1, 0]
// indexes represent the numbers that will represent numerical increments (by one or 2)
// return the smallest number accumulated

function jumpingOnClouds(c) {
    let jumpMinimum = 0;
    let i = 0;

    while (i + 2 === c.length || i < c.length - 1) {
        if (c[i + 2] === 1) {
            i++;
            jumpMinimum++;
        } else {
            i += 2;
            jumpMinimum++;
        }
    }

    return jumpMinimum;
}

let minNoOfJumps = jumpingOnClouds(c);
console.log(minNoOfJumps);