function solution(matrix) {

    let rows = matrix.length;
    let columns = matrix[0].length;
    if (rows > 1) {

        for (let j = rows - 1; j > -1; j--) {
            for (let i = 0; i < columns; i++) {
                if (matrix[0][i] === 0) {
                    matrix[1][i] = 0;
                }
                if (rows > 2) {
                    if (matrix[1][i] === 0) {
                        matrix[2][i] = 0;
                    }
                }
                if (rows > 3) {
                    if (matrix[2][i] === 0 || matrix[1][i] === 0) {
                        matrix[3][i] = 0;
                    }
                }
                if (rows > 4) {
                    if (matrix[4][i] === 0 || matrix[1][i] === 0) {
                        matrix[5][i] = 0;
                    }
                }

            }
        }
        console.log(matrix);

        const result = matrix.flat().reduce((a, b) => a + b);
        return result;
    } else {
        const result = matrix.flat().reduce((a, b) => a + b);
        return result;
    }
}

console.log(solution([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
]));

// function solution(matrix) {

//     let rows = matrix.length;
//     let columns = matrix[0].length;
//     if (rows > 1) {

//         for (let j = rows - 1; j > -1; j--) {
//             for (let i = 0; i < columns; i++) {
//                 if (matrix[j][i] === 0)
//                     for (let n = 2; n < rows; n++) {
//                         matrix[0 + n][i] = 0;
//                     }
//             }
//         }
//         console.log(matrix);
//         const result = matrix.flat().reduce((a, b) => a + b);
//         return result;
//     } else {
//         const result = matrix.flat().reduce((a, b) => a + b);
//         return result;
//     }
// }

// console.log(solution([
//     [0, 0, 1, 0],
//     [0, 5, 0, 1],
//     [2, 0, 3, 3],
//     // [1, 1, 1, 1]
// ]));