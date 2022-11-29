var frasesviz = ['Avance uma casa', 'Volte uma casa', 'Ande duas casas para frente', 'Ande 4 casas para frente']
var frasesami = []
var frasescont = []


function sorteiacartaviz(){
    var numsort = Math.floor(Math.random() * 3)
    console.log(numsort)
    var cartaexibida = frasesviz[numsort]
    document.getElementById("resultado").innerHTML = cartaexibida
}

function sorteiacartaami(){
    var numsort = Math.floor(Math.random() * 3)
    console.log(numsort)
    var cartaexibida = frasesami[numsort]
    document.getElementById("resultado").innerHTML = cartaexibida
}



function sorteiacartacont(){
    var numsort = Math.floor(Math.random() * 3)
    console.log(numsort)
    var cartaexibida = frasescont[numsort]
    document.getElementById("resultado").innerHTML = cartaexibida
}
