function solution(inputArray) {
    let n = 0
    let max = inputArray[1].length;
    console.log(max);

    for (let i = 0; i < inputArray.length; i++) {
        if (n < inputArray[i].length) {
            n = inputArray[i].length
        }
    }
    console.log(n);

    function isTheLongest(value) {
        return value.length === n;
    }

    let filtered = inputArray.filter(isTheLongest);

    return filtered;
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));