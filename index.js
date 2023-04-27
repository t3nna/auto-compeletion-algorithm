/*function insertSorted(arr, key) {


    let i, n = arr.length

    for (i = n - 1; (i >= 0 && arr[i] > key); i--)
        arr[i + 1] = arr[i];

    arr[i + 1] = key;

    console.log(arr)
    return (n + 1);
}

insertSorted([1, 3, 7, 12, 44], 8)*/
const exampleArr = ['car', 'carpet', 'java', 'javascript', 'internet']

function insertSortedString(arr, key) {
    let i
    let n = arr.length

    for (i = n - 1; (i >= 0 && arr[i].localeCompare(key) >= 0); i--) {

        console.log(arr[i].localeCompare(key))
        arr[i + 1] = arr[i];

    }
    arr[i + 1] = key;
    console.log(arr)
}

function insertSortedBinary(arr, key) {
    let low = 0,
        high = arr.length;

    while (low < high) {
        let mid = (low + high) >>> 1;
        if (arr[mid] < key) low = mid + 1;
        else high = mid;
    }
    arr.splice(low, 0, key)
}

insertSortedBinary(exampleArr, 'javasuck')



function findCandidates(arr, key) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].substring(0, key.length)
        if (temp.includes(key)) {
            res.push(arr[i])
        }
    }
    return res
}

console.log(findCandidates(exampleArr, 'va'));

console.log(findCandidates(['abc', 'dmo', 'dzo', 'edb', 'ffl', 'zzo'], 'd'));
