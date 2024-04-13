1. Write a function to check if a given string is a palindrome. 

Hiring managers review how well a candidate can handle edge cases while handling case sensitivity, punctuation, and whitespace. 

Sample answer: This function takes a string as input to convert it into lowercase and then compares it with its reverse. The string can be deemed a palindrome if the two match. 

function isPalindrome(str) { 

  return str.toLowerCase() === str.toLowerCase().split(”).reverse().join(”); 

} 
