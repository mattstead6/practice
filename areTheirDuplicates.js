

// FREQUENCY COUNTER METHOD
function areThereDuplicates(arguments) {
let collection = {};
for(let el of arguments) {
    collection[el] ? collection[el] +=1 : collection[el] = 1;
}
for(let el in collection) {
    if(collection[el] > 1){
        return true
    }
}
return false
}



// TWO POINTERS METHOD

function areThereDuplicatesPointerMethod(args) {
    args.sort((a,b) => a>b);
    let start = 0;
    let next = 1;
    while(next < args.length) {
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
}