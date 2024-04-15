6. Write a function that determines if a given number is prime or not. 

By asking this question, interviewers can understand how good the candidate is proficient in math operations and JavaScript logic. The interviewee should excute a clean and optimized solution that is efficient. 

Sample answer: 

function isPrime(num) { 

  if (num <= 1) return false; 

  for (let i = 2; i <= Math.sqrt(num); i++) { 

    if (num % i === 0) return false; 

  } 

  return true; 

} 
