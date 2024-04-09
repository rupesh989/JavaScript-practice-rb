2. Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and punctuation. 

Interviewers can gauge the interviewee’s capability to handle whitespace and punctuation gracefully while also maintaining the palindrome-checking logic. Candidates must express their knowledge of regular expressions or any other efficient approach. 

Sample answer: 

function isPalindrome(str) { 

  const cleanedStr = str.replace(/[^\w]/g, ”).toLowerCase(); 

  const reversedStr = cleanedStr.split(”).reverse().join(”); 

  return cleanedStr === reversedStr; 

} 
