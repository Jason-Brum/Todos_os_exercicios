//Faça um algoritmo que leia três números e determine qual é o maior e qual é o menor entre eles.

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite o primeiro número: "))
let num2 = parseInt(prompt("Digite o segundo número: "))
let num3 = parseInt(prompt("Digite o terceiro número: "))

let maior, menor

if (num1 >= num2 && num1 >= num3 ) {
    maior = num1
} else if (num2 >= num1 && num2 >= num3){
    maior = num2
} else {
    maior = num3
}

if (num1 <= num2 && num1 <= num3 ) {
    menor = num1
} else if (num2 <= num1 && num2 <= num3){
    menor = num2
} else {
    menor = num3
}

console.log(`O maior número é ${maior} e o menor número é o ${menor}`)

