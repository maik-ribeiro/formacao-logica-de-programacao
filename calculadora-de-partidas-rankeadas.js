//Calculadora de partidas Rankeadas

// O que deve ser utilizado?
    // Variáveis
    // Operadores
    // Laços de repetição
    // Estruturas de decisões
    // Funções

// Objetivo:
    // Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador;
    // Depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

    // Se vitórias for menor do que 10 = Ferro
    // Se vitórias for entre 11 e 20 = Bronze
    // Se vitórias for entre 21 e 50 = Prata
    // Se vitórias for entre 51 e 80 = Ouro
    // Se vitórias for entre 81 e 90 = Diamante
    // Se vitórias for entre 91 e 100= Lendário
    // Se vitórias for maior ou igual a 101 = Imortal

// Saída
//Ao final deve se exibir uma mensagem:
    // "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


let saldoVitorias = 0
let saldoDerrotas = 0
let nivel = ""

for (let dia = 0; dia <= 12; dia ++){
    saldoVitorias += 12
    saldoDerrotas += 3
    
    let resultado = calcularRanking(saldoVitorias, saldoDerrotas)
    function calcularRanking(vitorias, derrotas){
        let saldo = vitorias - derrotas
        return saldo
    }

    if (resultado < 10){
        nivel = "Ferro";
    }else if (resultado < 20){
        nivel = "Bronze";
    }else if (resultado < 50){
        nivel = "Prata";
    }else if (resultado < 80){
        nivel = "Ouro";
    }else if (resultado < 90){
        nivel = "Diamante";
    }else if (resultado < 100){
        nivel = "Lendário";
    }else {
        nivel = "Imortal"
    }
    console.log(`----------------------- Ranking - Dia ${dia} -----------------------`)
    console.log(`Herói tem de saldo de ${resultado} vitórias e está no nível de ${nivel}!`)
}