8. Given a string, write a function to count the occurrences of each character in the string. 

Hiring managers expect the candidate to be familiar with string manipulation and loop constructs. When they ask this question, they can evaluate whether the candidate knows data structures. 

Sample answer: 

function countCharacterOccurrences(str) { 

  const charCount = {}; 

  for (let char of str) { 

    charCount[char] = (charCount[char] || 0) + 1; 

  } 

  return charCount; 

} 
