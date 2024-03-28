// Question: Write a function that reverses a given string.
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Hello'));
// Output: 'olleH'
