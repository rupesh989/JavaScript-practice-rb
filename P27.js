2. Implement a function to reverse a string without using the built-in reverse() method. 

Hiring managers aim to analyze the candidate’s knowledge of string manipulation in JavaScript while also measuring their ability to think of alternative solutions. 

Sample answer: I would use a for lopp to iterate through the characters from the end to the beginning. By appending the character to a new string, it results in the reversed output. 

function reverseString(str) { 

  let reversed = ”; 

  for (let i = str.length – 1; i >= 0; i–) { 

    reversed += str[i]; 

  } 

  return reversed; 

} 
