let b = [];

function solution(n, a) {
    a = [];
    n = 8;
    a.length = n;
    random(n, a)
    for (let i = 0; i < a.length; i++) {

        if (a[i - 1] === undefined) {
            b[i] = a[i] + a[i + 1];
        } else if (a[i + 1] === undefined) {
            b[i] = a[i] + a[i - 1];
        } else {
            b[i] = a[i - 1] + a[i] + a[i + 1];
        }

    }

    console.log(b);
    return b;
}

function random(n, a) {

    for (let i = 0; i < n; i++) {
        if (a[i] === undefined) {
            a[i] = Math.floor(Math.random() * 101);

        }
        console.log(a[i]);
    }
}

console.log(solution());
solution();