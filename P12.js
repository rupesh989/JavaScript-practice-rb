// 6. Find the missing number from sorted array with O(n) complexity

let ar = [1, 3, 4, 6, 7, 8, 10];
function missing(a) {
let missing = [];
for (let i=0; i < ar.length; i++) {
if (!(ar[i + 1] ar[i] == 1) && ! (ar[i + 1] == undefined)) {
missing.push(ar[i] + 1);
}
}
return missing;
}
console.log(missing(ar));
// Output [2, 5, 9]
