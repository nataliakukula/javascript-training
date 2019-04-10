// You just invested in some optical character recognition software, but you saved on
//the budget and the software isn't that great
// You quickly realize that the software inserts some unnecessary numerical characters.
// Your job is to write a function that takes these strings as inputs, and cleans out the numeric characters and
// return a string with special characters and spacing all intact.
// For example: stringClean('Thi3s looks65 awesom4e!') == 'This looks great!
// Special characters include: ~#$%^&!@*():;"'.,?

let stringCleaning = (str) => {

    return str.replace(/[0-9]/g, '');
};

let string = "Thi3s looks65 awesom4e!"
console.log(stringCleaning(string));