function solution(inputArray) {
    let product = -1000;

    for (let i = 0; i < inputArray.length - 1; i++) {
        if (product < (inputArray[i] * inputArray[i + 1])) {
            product = inputArray[i] * inputArray[i + 1];
        }
    }
    console.log(product);
    return product;
}

console.log(solution([-23, 4, -3, 8, -12]));