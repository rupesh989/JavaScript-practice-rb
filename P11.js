
// 7. Find the nth largest element in a sorted array
let arr = [12,34,21,14,67,35,64,25]; arr.sort((a, b) => a b);
const nthLargest = arr[arr.length n] // if n= 2
console.log(nthLargest);
// Output 64
