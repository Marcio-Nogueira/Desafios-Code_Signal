function solution(statues) {
    statues.sort(function(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    before = statues.length;
    removeEqual(statues);
    for (let i = 0; i < statues.length - 1; i++) {
        if (statues[i + 1] - statues[i] > 1) {
            statues.splice(i + 1, 0, statues[i] + 1);
        }
    }

    after = statues.length - before;
    return after;
}

console.log(solution([2, 5, 3, 20, 5, 1]));

function removeEqual(statues) {
    for (let i = 0; i < statues.length - 1; i++) {
        if (statues[i + 1] === statues[i]) {
            statues.splice(i, 1);
        }
    }
    return statues;
}