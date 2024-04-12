9. Write a function that finds the second largest number in an array. 

Such a question reveals to the interviewers how well the candidate can use loops and array methods, work with them, and utilize logic to find solutions. 

Sample answer: 

function findSecondLargest(arr) { 

  arr.sort((a, b) => b – a); 

  return arr[1]; 

} 
