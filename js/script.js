
function logar(){
    var opcao1 = document.querySelector('input[name="opcao1"]:checked').value;
    if (opcao1 === "2") {
        var opcao2 = document.querySelector('input[name="opcao2"]:checked').value;
        if (opcao2 === "1") {
            botao_entrar = window.open("~/../indexp1.html");
        } else {
            botao_entrar = window.open("~/../indexp2.html");
        }
    } else {
        botao_entrar = window.open("~/../indexp1.html");
    }
}
/*------------- MODAL -------------*/
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

openModalButton.addEventListener("click", () => {
    toggleModal();
    var titulo = window.document.querySelector('title').id;
    if (titulo === 'pc') {
        singleplayer()
    } else if (titulo === 'p1') {
        multiplayer('1')
    } else {
        multiplayer('2')
    }
})

function adicionarJogada() {
    var titulo = window.document.querySelector('title').id;
    if (titulo === 'p1') {
            var pl = document.querySelector(`.player1 img.sel`).id
        if (pl !== null) {
            localStorage.setItem('player1', pl)
        } else {
            console.log("não funcionou")
        }
    } else {
        var pl = document.querySelector(`.player2 img.sel`).id
        if (pl !== null) {
            localStorage.setItem('player2', pl)
        } else {
            console.log("não funcionou")
        }
    }
}



function singleplayer() {
    var pl = document.querySelector("img.sel").id
    var opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']
    var esc = parseInt(Math.random() * 5)
    if (pl == opcoes[2] && opcoes[esc] == opcoes[1] || pl == opcoes[1] && opcoes[esc] == opcoes[0] || pl == opcoes[0] && opcoes[esc] == opcoes[3] ||
    pl == opcoes[3] && opcoes[esc] == opcoes[4] || pl == opcoes[4] && opcoes[esc] == opcoes[2] || pl == opcoes[2] && opcoes[esc] == opcoes[3] ||
    pl == opcoes[3] && opcoes[esc] == opcoes[1] || pl == opcoes[1] && opcoes[esc] == opcoes[4] || pl == opcoes[4] && opcoes[esc] == opcoes[0] ||
    pl == opcoes[0] && opcoes[esc] == opcoes[2]) {
        document.querySelector("h2").innerText = "Você ganhou!=)"
    } else if (pl == opcoes[esc]){
        document.querySelector("h2").innerText = "Empate! =/"
    } else {
        document.querySelector("h2").innerText = "voce perdeu!=("
    }
    
    var voce = document.querySelector("#a1 img")
    voce.setAttribute("src", imagem(pl))
    var adv = document.querySelector("#a2 img")
    adv.setAttribute("src", imagem(opcoes[esc]))
}


async function multiplayer(player) {
    var opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']
    adicionarJogada()
    var pl = localStorage.getItem('player1')
    var pl2 = localStorage.getItem('player2')
    if (pl == opcoes[2] && pl2 == opcoes[1] || pl == opcoes[1] && pl2 == opcoes[0] || pl == opcoes[0] && pl2 == opcoes[3] ||
    pl == opcoes[3] && pl2 == opcoes[4] || pl == opcoes[4] && pl2 == opcoes[2] || pl == opcoes[2] && pl2 == opcoes[3] ||
    pl == opcoes[3] && pl2 == opcoes[1] || pl == opcoes[1] && pl2 == opcoes[4] || pl == opcoes[4] && pl2 == opcoes[0] ||
    pl == opcoes[0] && pl2 == opcoes[2]) {
        document.querySelector("h2").innerText = "Você ganhou!=)"
    } else if (pl == pl2){
        document.querySelector("h2").innerText = "Empate! =/"
    } else {
        document.querySelector("h2").innerText = "voce perdeu!=("
    }
    
    var voce = document.querySelector("#a1 img")
    voce.setAttribute("src", imagem(pl))
    var adv = document.querySelector("#a2 img")
    adv.setAttribute("src", imagem(pl2))
}


function selecionar(op, player='') {
    var todos = document.querySelectorAll(`.player${player} img`)
    todos.forEach((el) => {
        el.classList.remove("sel")
        el.classList.remove("nsel")
        el.classList.add("nsel")
    }); 
    switch (op) {
        case 1:
            var esc = document.querySelector("img#pedra")
            break
        case 2: 
            var esc = document.querySelector("img#papel")
            break
        case 3:
            var esc = document.querySelector("img#tesoura")
            break
        case 4:
            var esc = document.querySelector("img#lagarto")
            break
        case 5:
            var esc = document.querySelector("img#spock")
            break
    }
    esc.classList.remove("nsel")
    esc.classList.add("sel")
}

function imagem(op) {
    if (op == "pedra") {
        return "img/pedra.png"
    } else if (op == "papel") {
        return "img/papel.png"
    } else if (op == "tesoura") {
        return "img/tesoura.png"
    } else if (op == "lagarto") {
        return "img/lagarto.png"
    } else if (op == "spock") {
        return "img/spock.png"
    }
}