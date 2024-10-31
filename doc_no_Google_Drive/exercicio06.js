//Escreva um código que receba o valor de três produtos e aplique um desconto de 15% se o total for maior que R$100,00 ou de 10% se for menor.

const prompt = require('prompt-sync')();

let alicate = parseFloat(prompt("Digite o valor do alicate: "))
let fenda = parseFloat(prompt("Digite o valor da chave de fenda: "))
let maleta = parseFloat(prompt("Digite o valor da maleta de ferramentas: "))

const soma = alicate + fenda + maleta

if (soma >= 100) {
    console.log(`O total da compra é de ${soma*0.85}`)
} else {
    console.log(`O total da compra é de ${soma * 0.90}`)
}


