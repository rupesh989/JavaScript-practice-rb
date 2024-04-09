//1. Write a function that reverses the order of words in a sentence without using the built-in reverse() method. 

//This question not only assesses the creativity of the candidates but also helps hiring managers understand how well a candidate can come up with a clean and understandable solution. 

//Sample answer: 

function reverseSentence(sentence) { 

  const words = sentence.split(‘ ‘); 

  const reversedWords = words.reverse(); 

  return reversedWords.join(‘ ‘); 

} 
