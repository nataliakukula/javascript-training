// Write a function that takes in a radius and returns the area of a circle:
// PI*radius2
function circleArea(radius) {

    return Math.PI * (radius * radius)// Math.pow(radius, 2), it would be 10 to the power of 2 or radius**
};

console.log(circleArea(2));

// MDN example
// take the radius and calculate the circumference
// 2*PI*radius
function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

console.log(calculateCircumference(10));