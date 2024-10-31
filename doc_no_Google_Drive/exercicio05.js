//Faça um programa que calcule a média aritmética de 4 notas inseridas pelo usuário.(JS)


const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite sua nota do primeiro bimestre: "))
let nota2 = parseFloat(prompt("Digite sua nota do segundo bimestre: "))
let nota3 = parseFloat(prompt("Digite sua nota do terceiro bimestre: "))
let nota4 = parseFloat(prompt("Digite sua nota do quarto bimestre: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >= 7) {
    console.log(`Sua média foi ${media.toFixed(2)} e você foi APROVADO`)
}
else if (media >= 4){
    console.log(`Sua média foi de ${media.toFixed(2)} e você está de recuperação`)
}
else {console.log(`Sua média foi de ${media.toFixed(2)} e você foi REPROVADO`)}