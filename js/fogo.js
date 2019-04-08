// fogo.js


const arrayFogo = []
const larguraFogo = 2
const alturaFogo = 3

function iniciar () {
    baseFogo ()
    console.log (arrayFogo)
}



function baseFogo () {
    const numeroPixels = alturaFogo * larguraFogo

    for (let i = 0; i < numeroPixels; i++) {
        arrayFogo [i] = 0
    }
}

function propagacaoFogo () {

}

function rederizarFogo () {

}

iniciar ()