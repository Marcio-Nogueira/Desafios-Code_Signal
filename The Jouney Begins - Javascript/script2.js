// desafio 1

function solution1(param1, param2) {
    let sum = param1 + param2;
    return sum;
}

// console.log(solution1(15, 26));

//desafio 2

function solution2(year) {
    if (year <= 100) {
        let century = 1;
        return century;
    } else {
        century = Math.ceil(year / 100);
        return century;
    }

}

// console.log(solution2(1500));

// desafio 3

function solution3(inputString) {
    let sWithoutBlanks = inputString.replace(/\s+/g, '');
    let split = sWithoutBlanks.split("");
    let reverseInputString = "";
    let splitReverse = reverseInputString.split("");
    j = 0;
    for (let i = split.length - 1; i >= 0; i--) {
        splitReverse[j] = split[i];
        j++;
    }

    if (JSON.stringify(split) === JSON.stringify(splitReverse)) {
        return true;
    } else {
        return false;
    }
}

console.log(solution3("ana ana a"));

// teste split string

// myString = "Márcio Nogueira de Sousa";
// resultado = myString.split("");

// console.log(resultado);