const prompt = require("prompt-sync")()
console.log('CÁLCULO DE MÉDIA')
console.log()
let nt1 = Number(prompt("Informe a primeira nota:"))
let nt2 = Number(prompt("Informe a segunda nota:"))
console.log()
const media = (nt1 + nt2) / 2 
if (media >= 6){
    console.log("Aprovado")
}