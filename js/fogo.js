// fogo.js


const firePixelsArray = []
const fireWidth = 2
const fireHeight = 3

function start () {
    createFireDataStructure()
    rederFite()
}



function createFireDataStructure () {
    const numberOfPixels = fireHeight * fireWidth

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray [i] = 0
    }
}

function calculateFirePropagation () {

}

function rederFite () {
    let html = "<table cellpadding=0 cellspacing=0>"

    // Para cada pixel de ALTURA, é criado um table row <tr> (row).
    for (let row = 0; row < fireHeight; row++) { 
        html += "<tr>"

        // Para cada pixel de LARGURA, é criado um table data <td> (columm).
        for (let columm = 0; columm < fireWidth; columm++) {
            const pixelIndex = columm + (fireWidth * row)

            html += "<td>"
            html += pixelIndex
            html += "</td>"
        }

        html += "</tr>"
    }
    html += "</table>"

    document.querySelector ("#canvasFogo").innerHTML = html
}

start ()