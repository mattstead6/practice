const binarySearch = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor(start - end / 2)

    while (start <= end) {
        if (arr[middle] === val) {
            return middle
        } else if (arr[middle] < val) {
            start = middle + 1
        } else {
            end = middle - 1
        }
        Math.floor(start - end / 2)
    }
    return - 1
}