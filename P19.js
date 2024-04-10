4. Implement a function that returns the average value of numbers in an array. 

By asking this question, hiring managers can assess the candidate’s knowledge of arithmetic operations, array manipulation, and looping.  

Sample answer: 

function calculateAverage(numbers) { 

  let sum = 0; 

  for (let number of numbers) { 

    sum += number; 

  } 

  return sum / numbers.length; 

} 
