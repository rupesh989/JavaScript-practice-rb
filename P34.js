9. Implement a function to remove duplicates from an array. 

When interviewers present the candidate with this question, they can gauge the level of understanding a candidate has regarding array methods and different approaches to solve the problem. 

Sample answer: The following function duplicates from an array by converting it into a Set. This automatically removes duplicates. Next, the function converts the Set back into an array. 

function removeDuplicates(arr) { 

  return Array.from(new Set(arr)); 

} 
