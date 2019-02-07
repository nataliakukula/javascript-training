function findShort(str) {
    let array = str.split(" ");
    let shortestLength = array[0].length;

    for (var i = 1; i < array.length; i++) {
        shortestLength = array[i].length < shortestLength ? array[i].length : shortestLength
    }

    return shortestLength;
}

// findShort("My name is Natalia Kukula and I suck at algorithms.");
// findShort("Booo! Why are you so cruel?");
// findShort("adfhk w1110`kd;sf  ffff dsa wo1110000 000");