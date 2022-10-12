
// Assignment 2: Big O Notation 
 
// Directions: For each one of these code blocks, please identify the time complexity and 
// explanation of why it is.  
 
// Problem 1:  

function findFirstIndexOfNumber(number, array) { 
    for (let i = 0; i < array.length; i++) { 
      if (array[i] === number) { 
        return i; 
      } 
    } 
    return -1 
  } 

  // Time complexity of O(n) because the size of n will determine how long it takes to computer
  // if n is large, worst case we check each element, therefore as n increases linearly, so does time complexity
 
// Problem 2:  

function findEachIndexOfNumber(number,array) { 
    let arrayOfIndexes = []; 
    array.forEach(function(element, index) { 
      if (element === number) { 
        arrayOfIndexes.push(index); 
      } 
    }); 
    return arrayOfIndexes; 
  } 

  // Time complexity of O(n) because we are simply iterating over an array of size n
  // as that array increases, time complexity increase linearly
  // push is constant time complexity, while for loop is linear; therefore answer is linear
 
// Problem 3:  

const myArray = [36, 14, 1, 7, 21]; 
 
function higherOrLower(array) { 
  if (array[array.length -1 ] > array[0]) { 
    return "Higher"
  }
  else if (array[array.length -1 ] < array[0]) { 
    return "Lower"; 
  } else { 
    return "Neither"; 
  } 
} 

// this is O(1) as we are simply comparing the last element to the first element which is both O(1)
// O(1 + 1) goes down to O(1)

// right???
 
 
// Problem 4:  

const mArray = [1,2,3,4,5,6,7,8]; 
 
function determineSumOfSequentialArray(array) { 
   let sum = 0; 
   for (let i = 0; i < array.length; i++) { 
       sum += array[i]; 
   } 
   return sum; 
} 

// this is O(n) - simply iterating through each element - as array gets larger, we have to iterate over more 
// for loop is O(n) and addint to sum is O(n)
// so O(2n)
// which is O(n)


 
// Problem 5:  

const theArray = [1,1,1,1]; 
 
function determineSumOfSequentialArray(array) { 
  return array.length * (array.length + 1)/2; 
} 
 
// O(1)
// Regardless of size of n, computing the length is constant time



// Problem 6:  
function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) 
{ 
    let middleIndex = Math.floor((beginIndex + endIndex)/2); 
    if (array[middleIndex] === number) { 
      return middleIndex; 
    } else if (beginIndex >= endIndex) { 
      return -1; 
    } else if (array[middleIndex] < number) { 
      beginIndex = middleIndex + 1; 
      return recursiveBinarySearch(number, array, beginIndex, endIndex); 
    } else if (array[middleIndex] > number) { 
      endIndex = middleIndex - 1; 
      return recursiveBinarySearch(number, array, beginIndex, endIndex); 
    } 
  } 
 

  // this is log(n) time complexity because through each iteration we are getting rid of half the array
  // so as n gets larger, time complexity increases exponentially 
  // binary search
 
 
 
 
 
 
 
 
 
 
// Problem 7:  
const array1 = [3, 7, 9, 12, 15, 18, 32]; 
const array2 = [3, 3, 7, 41, 76]; 
function compareArrays(array1, array2) { 
    let arrayOfPairs = []; 
    array1.forEach(function(e, i) { 
      array2.forEach(function(e2, i2) { 
        if (e === e2) { 
          arrayOfPairs.push([i, i2]); 
        } 
      }); 
    }); 
    return arrayOfPairs; 
  } 

// for each loop inside a for each loop results in O(n^2) => nested loops

 
// Problem 8:  
function sortByValue(array){ 
    function swap(array, index1, index2){ 
      let temporaryValue = array[index1]; 
      array[index1] = array[index2]; 
      array[index2] = temporaryValue; 
    } 
    let count = 1; 
    while (count < array.length) { 
      let swapCount = 0; 
      for (let i=0; i<array.length-count; i++) { 
        if (array[i] > array[i+1]) { 
          swap(array, i, i+1); 
          swapCount++; 
        } 
      } 
     count++; 
   } 
     return array; 
  } 

  // O(n) because need to iterate over each element as n gets larger
  // increasing count and function swap both O(1)
 // therefore overall O(n)
// go over this one => confused!!



// Problem 9:  
function returnDupes(array, array2) { 
    let dupeArray = []; 
    array.forEach(function(element) { 
      if (array2.includes(element)) { 
        dupeArray.push(element); 
      } 
    }); 
    return dupeArray; 
  } 
 
// .includes has to search each element in the array therefore O(n)
// pushing into new array is O(1)
// so O(n + 1) is just O(n)



// Problem 10:  
function sumFilteredData(array) { 
    return array.filter(function(element) { 
      return ((element > 5) && (element < 20)) 
    }).reduce(function(valueToAdd, currentValue) { 
      return valueToAdd + currentValue; 
    }, 0); 
  } 
 

  // .filter is O(n) because has to check each element
  // .reduce is also O(n) but they work independenly, not nested, therefore O(2n) is O(n)