var botao = document.getElementsByTagName('td');
var iniciar = document.getElementById('iniciar')

iniciar.addEventListener('click', gerarJogo)

var grid_jogo = []

var grid_botoes = []

for (let i = 0; i < botao.length; i += 5) {
    var linha = []
    for (let j = i; j < (i + 5); j++) {
        linha.push(botao[j])
    }
    grid_botoes.push(linha)
}

for (let i = 0; i < grid_botoes.length; i++) {
    for (let j = 0; j < grid_botoes.length; j++){
        grid_botoes[i][j].addEventListener('click', function() {
            trocar(i,j)
        })
    }
}

function trocar(linha, coluna) {
    for (let i = -1; i < 2; i++) {
        if (i != 0) {
            if (posValida(linha+i,coluna)) {
                grid_jogo[linha+i][coluna] = grid_jogo[linha+i][coluna] == 1? 0 : 1
            }
            if (posValida(linha,coluna+i)) {
                grid_jogo[linha][coluna+i] = grid_jogo[linha][coluna+i] == 1? 0 : 1
            }
        }
    }
    grid_jogo[linha][coluna] = grid_jogo[linha][coluna] == 1? 0 : 1
    atualizarGrid()
}

function posValida(linha,coluna) {
    try {
        return grid_jogo[linha][coluna] == undefined ? false:true
    }
    catch(TypeError) {
        return false
    }
}

function atualizarGrid() {
    for (let i = 0; i < grid_botoes.length; i++) {
        for (let j = 0; j < grid_botoes.length; j++){
            if (grid_jogo[i][j] == 1) {
                grid_botoes[i][j].style.background = 'yellow'
            } else {
                grid_botoes[i][j].style.background = 'rgb(78,78,78)'
            }
        }
    }
}

function gerarJogo() {
    for (let i = 0; i < 5; i++) {
        var linha = []
        for (let j = 0; j < 5; j++) {
            linha.push(Math.floor(Math.random() * 2))
        }
        grid_jogo.push(linha)
    }
    atualizarGrid()
    iniciar.style.display = 'none'
}