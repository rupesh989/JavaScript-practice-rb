2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order. 

By asking this question, hiring managers analyze how well the candidate can discuss the sorting algorithm and its time complexity. It’s also crucial for candidates to demonstrate their code’s robustness. 

Sample answer: The following function takes an array of objects and a key to sort the array based on the values in ascending order. 

function sortByKey(arr, key) { 

  return arr.sort((a, b) => a[key] – b[key]); 

} 
