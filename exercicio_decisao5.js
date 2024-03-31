const prompt = require("prompt-sync")()
console.log('O NÚMERO É DIVISÍVEL POR 2,3 OU 5?')
console.log()
let num = Number(prompt("Insira um número para a verificação:"))
console.log()
if (num%2 == 0){
    console.log("O número é divisível por 2")
}
if (num%3 == 0){
    console.log("O número é divisível por 3")
}
if (num%5 == 0){
    console.log("O número é divisível por 5")
}
if(num%2 == 0 && num%3 == 0 ){
    console.log("O número é divisível por 6")
}
else{
    console.log("Não é divisível por nenhum dos acima")
}