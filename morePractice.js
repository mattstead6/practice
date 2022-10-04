


const printOdds = (n) => {
let odd = [];
  for (let i = 0; i < n; i++) {
    if (!(i % 2 === 0)) {
        odd.push(i)
    }
  }
  return odd 
}

// printOdds(5)


const myArray = [5,7,9,3,1,10]

const minItem = (arr, idx) => {
    // set a min amount in a variable
    // compare each iteration in the array with the min amount
    // return min amount at end
    let min = Infinity;
    for (let i = 0; i <= idx; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

// console.log(minItem(myArray, 3))


const removeDuplicates = (arr) => {
    let i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr
}

console.log(removeDuplicates([1,1,2]))
