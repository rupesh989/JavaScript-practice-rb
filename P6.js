// 1. Find the frequency of elements in array
// Method 1: Using Reduce method of array


let arr = ["hello", "world", "java", "hello", "java"]
function countWord(p) {
let result = p.reduce((allNames, name) {
if (name in allNames) {
allNames [name]++
} else {
allNames [name] = 1
}
return allNames;
}, {});
return result;
}
console.log(countWord(arr));

// Method 2: Using an Object
let arr = ["hello", "world", "java", "hello", "java"]
function countWord(p) {
var count = {};
p.forEach((item) => {
if (count[item]) {
count[item]++
} else {
count[item] = 1
}
})
return count;
}
console.log(countWord(arr));
