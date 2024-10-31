//Dado o seguinte cálculo: 10 + 20 * 3 - 5 / 2, reescreva-o em JavaScript e determine qual será o resultado, considerando a precedência dos operadores. Mas agora com os números fornecidos pelo usuário

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número: "))
let num2 = parseFloat(prompt("Digite o segundo número: "))
let num3 = parseFloat(prompt("Digite o terceiro número: "))
let num4 = parseFloat(prompt("Digite o quarto número: "))
let num5 = parseFloat(prompt("Digite o quinto número: "))


let resultado = num1 + num2 * num3 - num4 / num5

console.log(`O resultado de ${num1} + ${num2} x ${num3} - ${num4} / ${num5} é igual ${resultado}`)