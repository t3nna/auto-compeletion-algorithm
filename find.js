function findCandidatesBinary(arr, key) {
    let res = []
    let low = 0,
        high = arr.length;

    while (low < high) {
        let mid = (low + high) >>> 1;
        if (arr[mid] < key) low = mid + 1;
        else high = mid;
    }
    let i = low
    while (true) {
        let temp = arr[i].substring(0, key.length)
        if(!temp.includes(key)){
            break
        }
        res.push(arr[i])
        i++
    }
    return res
}

console.log(findCandidates(['abc', 'dmo', 'dzo', 'edb', 'fal', 'fba', 'fbc', 'fbd', 'fc', 'fm', 'zzo'], 'al'));

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
