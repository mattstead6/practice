const validAnagram = (string1, string2) => {

    if (string1.length !== string2.length) {
        return false
    }

    const firstWord = {};
    const secondWord = {};
    for (let char of string1) {
        firstWord[char] = (firstWord[char] || 0) + 1
    }
    for (let char of string2) {
        secondWord[char] = (secondWord[char] || 0) + 1
    }
    for (let letter in firstWord) {
        if(!(letter in secondWord)){
            return false
        }
        if (letter in secondWord) {
            if (firstWord[letter] !== secondWord[letter]) {
                return false
            }
        }
    }
    return true
}


console.log(validAnagram('awesome', 'aweso'))
console.log(validAnagram('', ''))
console.log(validAnagram('awesome', 12))




const validAnagramSecondWay = (string, string2) => {
    if(string.length !== string2.length) {
        return false
    }
    let wordCheck = {};
    for(let char of string) {
        wordCheck[char] = (wordCheck[char] || 0) + 1
    }
    for(let char of string2) {
        if(!wordCheck[char]) {
            return false
        } else {
            wordCheck[char] -= 1
        }
    }
return true
}


console.log(validAnagramSecondWay('aabt', 'baa'))

// practice bracket notation vs dot notation 