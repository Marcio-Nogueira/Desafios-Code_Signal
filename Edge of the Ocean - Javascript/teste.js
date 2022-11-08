console.log("Hello World!!");

// function calcular(x, y) {
//     let n1 = x;
//     let resultado = 0;

//     if (n1 < y) {
//         n1 = y;
//     }
//     let n2 = x;
//     if (n2 > y) {
//         n2 = y;
//         resultado = (n1 % n2)
//     }
//     if (resultado == 0) {
//         return n2;
//     } else {
//         x = n1;
//         y = n2;
//     }

// }

// calcular(125, 5);
// console.log(calcular(125, 5));

// if (6 > 2 || (1 == 3) && (11 >= 15) && (5 != 5)) {
//     console.log("verdade");
// } else {
//     console.log("mentira");
// }

// let carrinhoDeCompras = [];

// function items(nome, preco) {

//     return {
//         nome: nome,
//         preco: preco
//     }
// }

// function adcionarAoCarrinho() {
//     let nome = "Banana";
//     let preco = 5.0;
//     carrinhoDeCompras.push(items(nome, preco));
//     nome = "Morango";
//     preco = 8.0;
//     carrinhoDeCompras.push(items(nome, preco));
//     nome = "Abacate";
//     preco = 7.0;
//     carrinhoDeCompras.push(items(nome, preco));
// }

// function calcularTotal() {
//     let soma = 0;
//     for (let i = 0; i < carrinhoDeCompras.length; i++) {
//         soma += carrinhoDeCompras[i].preco;
//     }
//     return soma;
// }

// function tamanho() {
//     let tamanho = carrinhoDeCompras.length;
//     return tamanho;
// }

// function aplicarDesconto() {
//     calcularTotal()
//     let totalComDesconto = 0;
//     let totalSemDesconto = calcularTotal();
//     let quantidade = tamanho();
//     console.log(totalSemDesconto);
//     console.log(quantidade);

//     if (quantidade > 5) {
//         totalComDesconto = totalSemDesconto * 0.75;
//     } else {
//         totalComDesconto = totalSemDesconto * (1 - (0.05 * quantidade));
//     }

//     return totalComDesconto;
// }

// adcionarAoCarrinho();
// aplicarDesconto();

// console.log(aplicarDesconto());



////////////////////////////////////////////////////////////////
// function generate(number) {
//     let array = [0, 1];

//     for (i = 2; i < number; i++) {
//         array[i] = array[i - 2] + array[i - 1];
//     }
//     return array;

// }

// console.log(generate(15));

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

function calcularMedia(n1, n2, t) {
    let media = (n1 + n2 + t) / 3
    if (media >= 7) {
        return "Média =" + media + ", " + "Aluno aprovado."
    } else if (media <= 5) {
        return "Média =" + media + ", " + "Aluno reprovado."
    } else {
        return "Média =" + media + ", " + "Aluno de recuperação."
    }
}


console.log(calcularMedia(5, 6, 10));

// let vetor1 = [5, 8, 12, 7, 4, 4, 1, 11, 8, 12, 5, 6, 7, 11, 12];
// let vetor2 = [2, 6, 12, 5, 5, 4, 4, 12, 8, 12, 6, 7, 5, 8, 10];

// function contarIgualdade() {
//     let contador = 0;
//     for (let i = 0; i < vetor1.length; i++) {
//         if (vetor1[i] == vetor2[i]) contador++;
//     }
//     return contador;
// }

// console.log(contarIgualdade());