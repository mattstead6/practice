

function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length) {
        return false
    }
    const amountOfNumbers = {};
    for (let char of strNum1) {
        amountOfNumbers[char] ? amountOfNumbers[char] += 1 : amountOfNumbers[char] = 1
    }
    console.log(amountOfNumbers)
    for (let char of strNum2) {
        if(!(amountOfNumbers[char])){
            return false
        } else {
            amountOfNumbers[char] -=1
        }
    }
    return true
}


console.log(sameFrequency(5684, 5686))