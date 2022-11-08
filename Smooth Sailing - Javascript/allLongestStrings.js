function solution(inputArray) {
    let n = 0

    for (let i = 0; i < inputArray.length; i++) {
        if (n < inputArray[i].length) {
            n = inputArray[i].length
        }
    }

    function isTheLongest(value) {
        return value.length === n;
    }

    let filtered = inputArray.filter(isTheLongest);

    return filtered;
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));