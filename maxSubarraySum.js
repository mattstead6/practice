
const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
        return null
    }
    let max = -Infinity
    // start by summing the first three and saving to a variable
    // sum the next three by introducing j and finding some of those next 3
    //  keep looping

    for(let i=0; i< arr.length-num +1; i++){
        temp = 0
        for(j=0; j<num; j++) {
            temp += arr[i + j]
        }
        if(temp>max) {
            max=temp
        }
    }
    return max
}


const maxSubarraySumSlidingWindow = (arr, num) => {
        // define a max sum 
        // define a temp sum
        // if num is bigger than array length, return null
        // sum arr up to num and equal max sum and temp sum to this
        // for loop, adding last element and sutracting first
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) {
        return null;
    }
    for (let i = 0; i < num; i++) {
        
    }
}



// console.log(maxSubarraySum([1,2,3,4], 2))
// console.log(maxSubarraySum([4,2,3,4,5,6], 2))
console.log(maxSubarraySumSlidingWindow([1,2,3,4,5,6,7,3,4,6], 3))
console.log(maxSubarraySumSlidingWindow([1,2,3,4], 5))























