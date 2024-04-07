// 9. Print all duplicate elements of an array
// 
let arr = [1, 1, 5, 6, 7, 7, 8, 9, 3, 4, 4];
function removeDuplicates (ar) {
let result = ar.filter((item, index) => {
return ar.indexOf(item) !== index;
});
return result;
}
console.log(removeDuplicates(arr));
// Output: [1,7,4]
