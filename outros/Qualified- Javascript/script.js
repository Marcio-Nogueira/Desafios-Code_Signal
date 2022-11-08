function calculaNumeroDaSenha(senha) {

    let senhaDecifrada = [];
    for (let i = 0; i < senha[0].length; i++) {
        let counterOne = 0;
        let counterZero = 0;
        let j = 0;

        while (j <= 9) {
            if (senha[j][i] == 0) {
                counterZero++;
            } else {
                counterOne++;
            }
            j++;
        }

        console.log(counterOne, counterZero);
        if (counterOne >= counterZero) {
            senhaDecifrada.push(1);
        } else {
            senhaDecifrada.push(0);
        }
    }

    let senhaEmDecimal = 0;
    let expoente = 9;
    for (let i = 0; i < senhaDecifrada.length; i++) {
        senhaEmDecimal += senhaDecifrada[i] * Math.pow(2, expoente);
        expoente--;
    }
    console.log(senhaDecifrada);
    console.log(senhaEmDecimal);
    return senhaEmDecimal;
}

let senha = ["0110100000", "1001011111", "1110001010", "0111010101", "0011100110", "1010011001", "1101100100", "1011010100", "1001100111", "1000011000"]

calculaNumeroDaSenha(senha);