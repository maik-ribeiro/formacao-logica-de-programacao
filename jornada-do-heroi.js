// Desafio Classificador de nível do Herói

// O que deve ser utilizado?
// 1 - Variáveis
// 2 - Operadores
// 3 - Laços de repetição
// 4 - Estruturas de decisões

// Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói;
// Depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
    // Se o XP for menor de que 1.000 = Ferro
    // Se o XP for entre 1.001 e 2.000 = Bronze
    // Se o XP for entre 2.001 e 4.000 = Prata
    // Se o XP for entre 4.001 e 6.000 = Ouro
    // Se o XP for entre 6.001 e 8.000 = Platina
    // Se o XP for entre 8.001 e 9.000 = Ascendente
    // Se o XP for entre 9.001 e 10.000 = Imortal
    // Se o XP for maior ou igual a 10.001 = Radiante

// Saída
// Ao final deve ser exibido a mensagem:
    // "O Herói de nome **{nome}** está no nível de **{nível}**!"


let nomeDoHeroi = "Flammer"
let nivelDoHeroi = ""

for (let experienciaDoHeroi = 0; experienciaDoHeroi < 11000; experienciaDoHeroi += 950){
    console.log("XP: " + experienciaDoHeroi)
    if (experienciaDoHeroi <= 1000){
        nivelDoHeroi = "Ferro";
    } else if (experienciaDoHeroi <= 2000) {
        nivelDoHeroi = "Bronze";
    } else if (experienciaDoHeroi <= 4000) {
        nivelDoHeroi = "Prata";
    } else if (experienciaDoHeroi <= 6000) {
        nivelDoHeroi = "Ouro";
    } else if (experienciaDoHeroi <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (experienciaDoHeroi <= 9000) {
        nivelDoHeroi = "Ascentente"
    } else if (experienciaDoHeroi <= 10000) {
        nivelDoHeroi = "Imortal";
    } else {
        nivelDoHeroi = "Radiante"
    }
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi  + "!")
}

console.log("--------------------- End Game ---------------------")