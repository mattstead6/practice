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

console.log(validAnagram('j', 'o'))
console.log(validAnagram('aab', 'baa'))
console.log(validAnagram('awesome', 'aweso'))
console.log(validAnagram('', ''))
console.log(validAnagram('awesome', 12))


// practice bracket notation vs dot notation 