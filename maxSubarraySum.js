
const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
        return null
    }
    let max = -Infinity
    // start by summing the first three and saving to a variable
    // sum the next three by introducing j and finding some of those next 3
    //keep looping

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




console.log(maxSubarraySum([1,2,3,4], 2))
console.log(maxSubarraySum([4,2,3,4,5,6], 2))
console.log(maxSubarraySum([1,2,3,4,5,6,7,3,4,6], 3))