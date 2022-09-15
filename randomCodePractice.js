// function solution(tileColors, size) {
//     let maxSum = 0;
//     let tempSum = 0;
//     for (let i = 0; i < tileColors.length - size; i++) {
//         for (let j = i; j < size; j++) {
//             tempSum += tileColors[j]
//         }
//         tempSum = maxSum
//     }
// }


function solution(tileColors, size) {
    let count = 0 ;
    for (let i = 0; i < tileColors.length - size; i++) {
        let isAlternating = true
        for (let j = 0; j < size - 1; j++) {
           if (tileColors[j+1] === tileColors[j]) {
                isAlternating = false
                break;
           }
        } 
        if (isAlternating) {
            count += 1
        }; 
    }
}

// tileColors = [0, 1, 0, 1, 1, 0, 1] and size = 4, the output should be solution(tileColors, size) = 3.


[0,1,0,1]

let i = 0; 
if (arr[i+1] !== arr[i]) 


for (i = 0; i < size - 1; i++) {
    if (arr[i+1] === arr[i]) {
        return false
    } 
}