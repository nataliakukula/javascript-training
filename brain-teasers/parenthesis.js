// determine if a series of parentheses are balanced

function isValid(str) {

    if (str.length <= 1)
        return false

    let matchingOpeningBracket, ch
    let stack = []

    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']

    for (let i = 0; i < str.length; i++) {
        ch = str[i]

        if (closingBrackets.indexOf(ch) > -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false
            }
        } else {
            stack.push(ch)
        }
    }

    return (stack.length == 0)
};

console.log(isValid("([)]")) // false
console.log(isValid("()")) // true


let isMatchingBrackets = function (str) {
    // this method will add a tag and take off a tag
    // to check what is left on the stack
    let stack = [];
    // create a hashmap of key value pairs that represent
    // the opening and closing parenthsis
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {
        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack,
        // which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();
            //If the popped element from the stack, which is the last opening brace
            // doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) { return false };
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end,
    // if the stack is not empty then fail
    if (stack.length !== 0) { return false };

    return true;
}

console.log(isMatchingBrackets("(){}")); // returns true
console.log(isMatchingBrackets("({})[](")); // returns false