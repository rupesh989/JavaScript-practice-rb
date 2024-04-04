// 2. Group items on the basis of age of given array of object

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
