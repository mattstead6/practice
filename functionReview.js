

// const answer = addNumbers(1,5)
// console.log(answer);

const addNumbersOther = (num1, num2) => ({answer: num1 + num2})


// implicit return 
// don't receive a context (this keyword)

const addNumbersAgain = function(num1, num2) {
    return num1 + num2
}

function addNumbers(num1, num2) {
    return num1 + num2
}

// hoisting! Brings function to the top

const answer = addNumbersOther(1,5,3); 
// this won't throw out an error!

console.log(answer)


// Write a function that calculates the maximum affordable monthly rent for an apt, given someone's yearly salary 
// rent is 20%
// write another function that receives someone's salary and the montly rent of a specific apartment -->  returns
// true or falue if the person with that slary can afford the apartment
// read about closur and higher order functions


 const maxAfordableRent = (salary) => 0.1 * salary

 const maxRent = maxAfordableRent(2000)
 console.log(maxRent)


 const canTheyAfford = (salary, rent) => {
    if (rent <= 0.1 * salary) {
        return true
    }
    return false
 }
 

 const affordOrNot = canTheyAfford(100000, 10001)
 console.log(affordOrNot)

 // find kth smallest number in array 


 const myArray = [9,6,7,8,45,35,85,3,46,43,82]

 const findKthSmallestNumber = (k) => {
    const sortedArray = myArray.sort((a,b) => a-b)
    return sortedArray[k]
 }

 console.log(findKthSmallestNumber(0))



