3. Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 

Candidates should demonstrate their approach to finding the maximum difference between the array elements to handle edge cases and invalid inputs. 

Sample answer: 

function largestDifference(arr) { 

  let min = arr[0]; 

  let maxDiff = 0; 

  for (let i = 1; i < arr.length; i++) { 

    if (arr[i] < min) { 

      min = arr[i]; 

    }

else { 

      const diff = arr[i] – min; 

      if (diff > maxDiff) { 

        maxDiff = diff; 

      } 

    } 

  } 

  return maxDiff; 

} 
