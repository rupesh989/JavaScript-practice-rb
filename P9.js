
// 4. Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

let ar = [1, 2, 3, 4, 6, 7, 8, 9];
function twosum(ar, target) {
let hash = {};
let sum = []
ar.forEach((item) => {
let diff = target - item;
if (hash[diff.toString()) !== undefined) {
sum.push([item, diff]);
}
hash[item.toString()] = item;
})
return sum;
}
console.log(twoSum(ar, 9));
// Output [ [ 6,3], [7, 2], [8,1]]
