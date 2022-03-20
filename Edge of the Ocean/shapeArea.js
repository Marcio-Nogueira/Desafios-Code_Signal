function solution(n) {
    let area = 1;
    count = 0;

    for (let i = 0; i < n; i++) {
        area = area + 4 * count;
        count++
    }
    return area;
}

console.log(solution(3));