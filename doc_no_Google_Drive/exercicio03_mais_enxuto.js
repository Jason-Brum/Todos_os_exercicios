//Faça um algoritmo que leia três números e determine qual é o maior e qual é o menor entre eles.

const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Digite o primeiro número: "))
let n2 = parseFloat(prompt("Digite o segundo número: "))
let n3 = parseFloat(prompt("Digite o terceiro número: "))

let maior = Math.max(n1, n2, n3);
let menor = Math.min(n1, n2, n3);

console.log(`O maior número é ${maior} e o menor número é o ${menor}`)

