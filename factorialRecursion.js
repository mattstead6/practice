

const factorial = (num) => {
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)

}
// console.log(factorial(5))




const test = (num) => {
    let answer = [];
    for (let n of num) {
        answer.push(n)
    }
    return answer
}



console.log(factorial(-3))
// console.log(answer)



