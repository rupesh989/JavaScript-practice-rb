10. Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 

When interviews ask this question, they aim to evaluate a candidate’s understanding of concepts like array methods, conditional statements, and other technical concepts. Candidate should demonstrate good coding style. 

 Sample answer: 

function groupByCondition(arr, condition) { 

  return [ 

    arr.filter(element => condition(element)), 

    arr.filter(element => !condition(element)) 

  ]; 

}
