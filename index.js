const readline = require('readline');

// Configura o readline para capturar a entrada do usuário no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para classificar o herói com base no XP
function classificarNivelHeroi(nome, xp) {
    let nivel;

    // Estrutura de decisão usando switch
    switch (true) {
        case (xp < 1000):
            nivel = "Ferro";
            break;
        case (xp >= 1001 && xp <= 2000):
            nivel = "Bronze";
            break;
        case (xp >= 2001 && xp <= 5000):
            nivel = "Prata";
            break;
        case (xp >= 5001 && xp <= 7000):
            nivel = "Ouro";
            break;
        case (xp >= 7001 && xp <= 8000):
            nivel = "Platina";
            break;
        case (xp >= 8001 && xp <= 9000):
            nivel = "Ascendente";
            break;
        case (xp >= 9001 && xp <= 10000):
            nivel = "Imortal";
            break;
        case (xp >= 10001):
            nivel = "Radiante";
            break;
        default:
            nivel = "Nível desconhecido";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Captura o nome e XP do herói
rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Digite a quantidade de XP do herói: ', (xpHeroi) => {
        classificarNivelHeroi(nomeHeroi, parseInt(xpHeroi));
        rl.close(); // Fecha a interface do readline após a conclusão
    });
});
