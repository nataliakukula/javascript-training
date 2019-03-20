// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// based on the "index" number return the fib number

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));


function fibonacci(num) {
    let a = 1;
    let b = 0;
    let temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}