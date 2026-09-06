const arr = [4, 1, 2, 1, 2];

function findNumberAppearOnce(arr) {
    let xor = 0;

    for (let num of arr) {
        xor ^= num;
    }

    return xor;
}

console.log(findNumberAppearOnce(arr)); 