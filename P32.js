7. Implement a function to find the sum of all the numbers in an array. 

Such a question helps understand if the interviewee can manipulate arrays and handle numeric values. This also helps managers assess problem-solving capabilities and ability to pay attention to code efficiency. 

Sample answer: I would use the reduce method to implement the following function: 

function findSum(arr) { 

  return arr.reduce((sum, num) => sum + num, 0); 

} 
