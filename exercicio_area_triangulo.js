const prompt = require("prompt-sync")()
console.log("CÁLCULO DA ÁREA DE UM TRIÂNGULO")
console.log()
let base = Number(prompt("Informe qual o valor da base do triângulo:"))
let altura = Number(prompt("Informe qual o valor da altura:"))
console.log()
let resultado = (base*altura) / 2
console.log(resultado)

