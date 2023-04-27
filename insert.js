const arr = [6, 7, 8, 9, 12, 14, 16, 17, 19, 20, 22];
const num = 15;

function sortedIndex(array, value) {
    let low = 0,
        high = array.length;

    while (low < high) {
        let mid = (low + high) >>> 1;
        if (array[mid] < value) low = mid + 1;
        else high = mid;
    }
    return low;
}

arr.splice(sortedIndex(arr,num), 0, num )
console.log(arr);