const exampleArr = []

// simple inserting algorithm
function insertSortedString(arr, key) {
    let i
    let n = arr.length

    for (i = n - 1; (i >= 0 && arr[i].localeCompare(key) >= 0); i--) {

        console.log(arr[i].localeCompare(key))
        arr[i + 1] = arr[i];

    }
    arr[i + 1] = key;
}

// improving performance using Binary search algorithm
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

insertSortedBinary(exampleArr, 'java')
insertSortedBinary(exampleArr, 'javascript')
// insertSortedBinary(exampleArr, 'dive')
insertSortedBinary(exampleArr, 'caz')
insertSortedBinary(exampleArr, 'cax')
insertSortedBinary(exampleArr, 'internet')


console.log(exampleArr)




// improving performance using Binary search algorithm
function findCandidatesBinary(arr, query, method = 'beginning') {
    let res = []
    let low = 0,
        high = arr.length;
    if(method === 'beginning') {

        while (low < high) {
            let mid = (low + high) >>> 1;


            if (arr[mid] < query) {
                low = mid + 1;
            } else high = mid;

        }

        let i = low

        while (true) {
            if(i>arr.length-1){
                break
            }
            if(query < arr[0].substring(0, query.length)){
                break
            }
            let temp = arr[i].substring(0, query.length)
            if (!temp.includes(query)) {
                break
            }
            res.push(arr[i])

            i++
        }
    }
    else if(method === 'contains'){
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(query)) {
                res.push(arr[i])
            }
        }
    }
    else {
        throw Error('Wrong method!')
    }


    return res
}

console.log(findCandidatesBinary(['abc', 'dmo', 'dzo', 'edb', 'fal', 'fba', 'fbc', 'fbd', 'fc', 'fm', 'zzo'], 'zz' ));


