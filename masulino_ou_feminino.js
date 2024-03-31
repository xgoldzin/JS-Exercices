//Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
const prompt = require("prompt-sync")()
console.log("Masculino ou Feminino?")
console.log()
while (true){
    let sx = String(prompt("Informe qual o seu sexo(f - Feminino, m - Masculino):"))
    let sxm = sx.toLowerCase();
    if (sx === "f"){
        console.log("Você é uma mulher!");
        break
    }
    else if (sxm === "m"){
        console.log("Você é um homem!");
        break
    }
    else{
        console.log("Sexo inválido");
        
        }
    }
