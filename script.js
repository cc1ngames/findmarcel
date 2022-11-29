var frasesviz = ['Você encontrou um rastro do macaco, avance uma casa.',
'Você pode atrasar qualquer jogador do tabuleiro por 2 rodadas.',
'Você foi abençoado pelo deus dos vizinhos, rode o dado mais uma vez.',
'Você ficou preso no elevador do prédio, fique uma rodada sem jogar.',
'Você encontrou uma armadilha para macacos, utiliza-a e avance 2 casas.',
'Você desligou a energia do prédio e todos além de você os jogadores devem ficar uma rodada sem jogar.'
]
var frasesami = ['Você encontrou um rastro do macaco, avance uma casa.', 
'Você conseguiu enganar o jogador do controle de animais, então ele volta uma casa.', 
'Você encontrou um rastro e vai informar para algum jogador do seu grupo, selecione um jogador do grupo dos amigos para avançar uma casa.', 
'Você caiu numa armadilha, volte uma casa.', 
'Você foi abençoado pelo deus dos macacos, rode o dado mais uma vez.', 
'Você encontrou a arma de dardos tranquilizantes do controle de animais, atire em algum outro jogador e o atrase por uma rodada.', 
'Você ficou preso no elevador do prédio, fique uma rodada sem jogar.', 
'Avance duas casas pelo fato do criador do jogo querer.']
var frasescont = ['Você pode usar sua arma de tranquilizante em qualquer um dos jogadores e faze-lo ficar uma rodada sem jogar.',
'Coloque uma armadilha na casa que você está, se alguém cair nela, ficará preso por uma rodada.',
'Você encontrou um rastro do macaco, avance uma casa.',
'Você foi abençoado pelo deus dos caçadores, rode o dado mais uma vez.',
'Você ficou preso no elevador do prédio, fique uma rodada sem jogar.',
'Escolha um lugar qualquer do tabuleiro para colocar uma armadilha, se alguém cair, ficará uma rodada sem jogar.'
]


function sorteiacartaviz(){
    var numsort = Math.floor(Math.random() * 5)
    console.log(numsort)
    var cartaexibida = frasesviz[numsort]
    document.getElementById("resultado").innerHTML = cartaexibida
}

function sorteiacartaami(){
    var numsort = Math.floor(Math.random() * 7)
    console.log(numsort)
    var cartaexibida = frasesami[numsort]
    document.getElementById("resultado").innerHTML = cartaexibida
}



function sorteiacartacont(){
    var numsort = Math.floor(Math.random() * 5)
    console.log(numsort)
    var cartaexibida = frasescont[numsort]
    document.getElementById("resultado").innerHTML = cartaexibida
}
