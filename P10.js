// 5. Find the missing number from unsorted array with O(n) complexity

// Algorithm
// -Create a variable sum = 1 which will store the missing number and a counter variable c = 2.
// -Traverse the array from start to end.
// -Update the value of sum as sum = sum — array[i] + c and update c as c++.
// -Print the missing number as a sum.

let ar = [2, 7, 8, 5, 1, 4, 3, 6];
function missing(a) {
let 1 = a.length;
let sum = 1;
for (let i = 2; i <= (1 + 1); i++) {
sum = sum + i;
sum = sum - a[i-2];
}
return sum;
}
console.log(missing(ar));
