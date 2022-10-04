
// PROBLEM 1  WHAT SHOULD THE FOLOWING EVALUATIONS RETURN

// 2 == '2'         =>   true (b/c javascript will attempt to convert and compare values) 
// 'he' == 'she'    =>   false (b/c diff strings)
// 2 === 2          =>   true
// 'true' == true   =>   true
// true === true    =>   true
// 'true' != true   =>   false
// 'true' !== true  =>   true

//  PROBLEM 2 - WHAT ARE 3 DIFF WAYS TO DECLARE A VARIABLE AND WHAT ARE DIFFERENCES

// 1. with LET keyword  =>  This allows for the variable to be reassigned
// 2. with CONST keywords => This does not allow for reassigning
// 3. with VAR ketword  =>  Old way to do things before const and let came about

// PROBLEM 3 =  WRITE A SIMPLE FUNCTION FOR EACH TYPE OF THESE FUNCTIONS

//1. First-Class Function
// when functions in that language are treated like any other variable

const myFunction = (arr) => {
    console.log(arr[0])
}

//2. Higher-Order Function
//Higher order functions are functions that operate on other 
//functions, either by taking them as arguments or by returning 
//them. In simple words, A Higher-Order function is a function 
//that receives a function as an argument or returns the function
// as output.

let myArr = [1, 2, 3, 4, 5]
const filteredArray = myArr.filter(num => num !== 3)

//3. Callback Function

// function
function greet(name, callback) {
    console.log(`Hi ${name}`);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


// PROBLEM 4  value of console.log a,b and c in code below?

// const a = 'hi';
// console.log(c);

// const someFunction = (arg) => {
//     const b = 'bye';
//     if (arg) {
//         const c = 'see ya!';
//         console.log(a);
//         console.log(b);
//     }
// }

// a    =>  'hi'
// b    =>  'bye'
// c    =>   undefined

// PROBLEM #5: Given the following data structure, write a for loop using:
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// - For statement
// - For...of
// The for loops should console.log out each of the values in 
// order like this: e. g. 1, 2, 3, 4, 5, 6, 7, 8

for (let i = 0; i < someArray.length; i++) {
    console.log(someArray[i])
}

for (let num of someArray) {
    console.log(num)
}


// PROBLEM #6: Given the following data structure:
const someArray1 = [1, 2, 3, 4, 5];
const someArray2 = [1, 2, 3, 4, 5];
const otherArray = [4, 6]


// - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
console.log(someArray1.concat(otherArray))
// - Use the length property to return the length of the array
console.log(someArray1.length)
// - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
console.log(someArray1.filter((n) => n !== 3))
// - Use the find() method to find and return the value of 5.
console.log(someArray1.find((n) => n === 3))
// - Use the slice() method to return back this array: [3, 4]
console.log(someArray1.slice(2, 4))
// - Use the splice() method to return back this array: [1, 2, 5]
const spliced = someArray2.splice(2, 2)
console.log(someArray2)
// - Use the includes() method to return back TRUE when I pass in “4” into the includes
// method.
console.log(someArray1.includes(4))
// - Use the indexOf() method to return back the index of the element “2”
console.log(someArray1.indexOf(2))
// - Use the isArray() method to return back TRUE when I pass in the array
console.log(Array.isArray(someArray1))
// - Use the join() method to return back: “1, 2, 3, 4, 5”
console.log(someArray1.join())
// - Use the map() method to return back a new array: [2, 4, 6, 8, 10]
console.log(someArray1.map((num) => num * 2))
// - Use the pop() method to return back a new array: [1, 2, 3, 4]
someArray1.pop()
console.log(someArray1)
// - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
someArray1.push(5, 6)
console.log(someArray1)
// - Use the shift() method to return back a new array: [2, 3, 4, 5]
someArray1.shift()
someArray1.pop()
console.log(someArray1)
// - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
someArray1.unshift(0, 1)
console.log(someArray1)
// - Sort this array to return [9, 1, 3, 5] using the sort() method
// - Use the reduce() method to return back the sum of all numbers in the array

const sumOfNumbers = someArray1.reduce((prev, current) => prev + current, 0)
console.log(sumOfNumbers)

// PROBLEM #7: Given the following data structure:

const someObject = {
    color: 'black'
}

// - Use the assign() method to add a new key value pair of: name: ‘john doe’
const returnedObj = Object.assign(someObject, { name: 'john doe' })
console.log(returnedObj)
// - Use the dot notation to add a new key value pair of: age: 22
someObject.age = 22
console.log(someObject)
// - Use the bracket notation to add a new key value pair of: address: ‘123 test address’
someObject['address'] = '123 test address'
console.log(someObject)
// - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
console.log(Object.keys(someObject))
// - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test address”]
console.log(Object.values(someObject))
// - Use the for...in loop against this object to console.log each of the keys values.
for (let prop in someObject) {
    console.log(someObject[prop])
}
// PROBLEM 8 - GIVEN THE FOLLOWING DATAA STATEMENT USE A LOOP TO CONSOLE LOG EACH OF THE VALUES

const numbers = [
    {
        num: 1
    },
    {
        num: 2
    }, {
        num: 3
    }
]

for (let obj of numbers) {
    console.log(obj.num)
}

//PROBLEM #9: Create a new Set() object
// - Add a new value of: ‘john doe’
// - Check if the value of ‘john doe’ exists 
// - Remove the value of ‘john doe’

const newSet = new Set()
newSet.add('john doe')
console.log(newSet.has('john doe'))
newSet.delete('john doe')

// PROBLEM #10: Create a new Map() object
// - Add a new key-value pair of: name: ‘john doe’ 
// - Check if the value ‘john doe’ exists
// - Remove the key-value pair of ‘john doe’

const newMap = new Map()
newMap.set('name', 'john doe')
console.log(newMap.has('john doe'))
newMap.delete('john doe')


// PROBLEM 11
//  * Return an object where each property is the name of the an 
// ice cream flavor and each value is an integer that is the total 
// count of that flavor.
// * Store the returned data in a new iceCreamTotals variable.

const data = [
    {
        name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate',
            'Cookies & Cream']
    },
    {
        name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip',
            'Chocolate', 'Vanilla']
    },
    {
        name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio',
            'Banana']
    },
    {
        name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip']
    },
    {
        name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry']
    },
    {
        name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip']
    }
]

const result = data.reduce((grouped, person) => {
    const flavors = person.favoriteIceCreams;
    for (let i of flavors) {
        grouped[i] ? grouped[i] += 1 : grouped[i] = 1
    }
    return grouped
}, {})

console.log(result)

// PROBLEM 12: Find the most recent date from this array using reduce():

const dates = [
    '2020/06/01',
    '2019/06/01',
    '2018/06/01',
    '2019/09/01',
    '2018/09/01'
]

const resu = dates.reduce((a, b) => (a > b ? a : b));
console.log(resu)

// PROBLEM 13: Given an array of objects with an age property.

const characters = [
    { name: 'Jean-Luc Picard', age: 59 }, 
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 }
];
 
// Return a map that contains how many characters have a given
// age? For example, .
//   the correct output on the above array would be
// { 29: 2, 59: 1}

const lastq = characters.reduce((groupedPeople, character) => {
        groupedPeople[character.age] ? groupedPeople[character.age] +=1 : groupedPeople[character.age] =1
    return groupedPeople
}, {})

console.log(lastq)