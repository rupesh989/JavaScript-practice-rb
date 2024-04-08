//10. Collect books from array of objects and return collection of books as an array
let friends = [{

name: 'Anna',

books: ['Bible', 'Harry Potter'],

age: 21

}, {

name: 'Bob',

books: ['War and peace', Romeo and Juliet'],

age: 26

}, {

name: 'Alice',

books: ['The Lord of the Rings', 'The Shining'],

age: 18

}]

let result friends.reduce((pre, curr) => {

return [.. precurr.books]

}, []);

console.log(result);

// Output:

[

'Bible',

'Harry Potter',

'War and peace',

'Romeo and Juliet',

'The Lord of the Rings',

'The Shining'

]
