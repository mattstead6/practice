

const countUniqueValues = (nums) => {
    let i = 0
    if(nums.length <= 0) {
        return 0
    }
    for (j = i+1; j < nums.length; j++) {
        if(nums[0] !== nums[j]) {
            i++;
            nums[i] === nums[j]
        }
    }
    return i + 1
}


console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,5,6]))
console.log(countUniqueValues([1,2,3,3,3,4]))
console.log(countUniqueValues([1,1,4,5]))
console.log(countUniqueValues([]))