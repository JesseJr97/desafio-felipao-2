let Resultado = Subtrair(84,15)
let NivelDoPersonagem = Resultado

if(NivelDoPersonagem < 10) {
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Ferro")
}
else if(NivelDoPersonagem > 11 && NivelDoPersonagem < 20) {
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Bronze")
}

else if(NivelDoPersonagem > 21 && NivelDoPersonagem < 50) {
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Prata")
}
else if(NivelDoPersonagem > 51 && NivelDoPersonagem < 80) {
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Ouro")
}
else if(NivelDoPersonagem > 81 && NivelDoPersonagem < 90) {
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Diamante")
}
else if(NivelDoPersonagem > 91 && NivelDoPersonagem < 100) {
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Lendário")
}

else if(NivelDoPersonagem > 101) 
console.log("O herói tem saldo de " + Resultado + " e está no nível de " + "Imortal") 

function Subtrair(vitoria, derrota){
return vitoria - derrota
}
