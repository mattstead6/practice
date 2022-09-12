

const nums = [2, 5, 3, 1, 6, 10, 12];
// const numberOver5 = nums.find(n => {
//     return n > 5;
// });
// console.log(numberOver5);



const findInArray = (array, testFunction) => {
    let foundNumber = undefined
    array.forEach((num) => {
        if (testFunction(num) === true && foundNumber === undefined) {
            foundNumber = num
        }
    })
    return foundNumber
}
const isGreaterThanFive = n => n > 5



const findInArraySecondAttempt = (array, testFunction) => {
    for (let element of array) {
        if (testFunction(element) === true) {
            return element
        }
    }
}

const transformArrayIntoOtherArray = (arr, transformationFunction) => {
    const newArr = []
    arr.forEach(element => {
        let transformedElement = transformationFunction(element)
        newArr.push(transformedElement)
    })
    return newArr
}


const transformArrayIntoSmallerArray = (arr, testFunction) => {
    const newArr=[]
    for(let element of arr) {
        if(testFunction(element)){
            newArr.push(element)
        }
    }
    return newArr;
}


console.log(transformArrayIntoOtherArray([1, 4, 9, 16], x => x * 2))

console.log(findInArraySecondAttempt(nums, isGreaterThanFive))

console.log(findInArraySecondAttempt(["matt", "joe", "penny", "mary"], name => { return name[0] === "m" }));

console.log(transformArrayIntoOtherArray(["matt", "joe", "penny", "mary"], name => name.toUpperCase()))

console.log(transformArrayIntoSmallerArray(["matt", "joe", "penny", "mary"], name => name[0] === 'm'))





