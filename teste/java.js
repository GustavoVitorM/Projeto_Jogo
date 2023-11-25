const prompt = require("prompt-sync")();

for (var i = 0; i <10; i++) {
    var pl = prompt("Escolha: Pedra, papel, tesoura, lagarto, spock: ")
    var opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']
    var esc = parseInt(Math.random() * 5)
    if (opcoes[pl] == opcoes[2] && opcoes[esc] == opcoes[1] || opcoes[pl] == opcoes[1] && opcoes[esc] == opcoes[0] || opcoes[pl] == opcoes[0] && opcoes[esc] == opcoes[3] ||
    opcoes[pl] == opcoes[3] && opcoes[esc] == opcoes[4] || opcoes[pl] == opcoes[4] && opcoes[esc] == opcoes[2] || opcoes[pl] == opcoes[2] && opcoes[esc] == opcoes[3] ||
    opcoes[pl] == opcoes[3] && opcoes[esc] == opcoes[1] || opcoes[pl] == opcoes[1] && opcoes[esc] == opcoes[4] || opcoes[pl] == opcoes[4] && opcoes[esc] == opcoes[0] ||
    opcoes[pl] == opcoes[0] && opcoes[esc] == opcoes[2]) {
        console.log(opcoes[esc])
        console.log("Voce ganhou!")
    } else if (opcoes[pl] == opcoes[esc]){
        console.log(opcoes[esc])
        console.log("Empate!")
    } else {
        console.log(opcoes[esc])
        console.log("voce perdeu!")
    }
} 