const prompt = require("prompt-sync")()
console.log("Qual número é maior?")
console.log()
let num1 = Number(prompt("Informe o primeiro número:"))
let num2 = Number(prompt("Insira o segundo número:"))
console.log()
if (num1 > num2){
    console.log(" ${num1} é maior que ${num2}")
}
if (num2 > num1){
    console.log(` ${num2} é maior que ${num1}`)
}