1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame. 

Interviewers expect the candidate to showcase their ability to clearly explain the purpose of the debounce function and its usage in scenarios where function calls need to be controlled. They are looking for the person’s ability to articulate technical concepts clearly. 

Sample answer: By delaying the execution of the debounce function until the specified time frame has passed, the frequency can be limited. 

function debounce(func, delay) { 

  let timer; 

  return function() { 

    clearTimeout(timer); 

    timer = setTimeout(func, delay); 

  }; 

} 
