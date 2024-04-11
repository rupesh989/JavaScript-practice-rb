6. Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 

Interviewers aim to gauge the candidate’s proficiency in use of array methods, handling edge cases, and in JavaScript syntax. Candidates must implement the function proper error handling. 

Sample answer: 

function findElementIndex(arr, element) { 

  const index = arr.indexOf(element); 

  return index !== -1 ? index : -1; 

} 
