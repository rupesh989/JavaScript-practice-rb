// 3. Program to check a string with balanced brackets.

const isValid = (str) => {
lets str.replace(/\s+/g,'');
if (s.length % 2 !== 0) return false;
const stack = [];
const map = new Map([
['(', ')'],
['[', ']'],
['{', '}']
]);
for (let i = 0; i < s.length; i += 1) {
if (map.has(s[i])) {
stack.push(map.get(s[i]));
} else if (s[i] !== stack.pop()) {
return false;
}
}
return stack.length === 0;
};
let strl = "({} [] ({}))";
let str2 = "}}";
console.log(isValid (str1)); // true
console.log(isValid(str2)); // false
