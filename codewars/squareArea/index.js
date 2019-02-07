function squareArea(A) {
    //radius	=	Circumference/2pi
    let circumference = 4 * A;
    let radius = circumference / (2 * Math.PI);
    let area = Math.pow(radius, 2);

    return Math.round(area * 100) / 100

}

// squareArea(14.05);
// squareArea(0);
// squareArea(2);

