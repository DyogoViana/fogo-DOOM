// fogo.js


const firePixelsArray = []
const fireWidth = 10
const fireHeight = 10
//Paleta de cores do fogo.
const fireColorsPalette = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]



// Começam as funções criadas abaixo.
function start () {
    createFireDataStructure()
    createFireSource()
    renderFire()

    setInterval (calculateFirePropagation, 1000)
}



// Cria a estrutura base do fogo.
function createFireDataStructure () {
    const numberOfPixels = fireHeight * fireWidth

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray [i] = 0
    }
}


// Calcula a propagação do fogo.
function calculateFirePropagation () {
    for (let columm = 0; columm < fireWidth; columm++) {
        for (let row = 0; row < fireHeight; row++) {
            const pixelIndex = columm + (fireWidth * row)
            
            updateFireIntensityPerPixel (pixelIndex)
        }
    }

    renderFire()
}


// Faz o calculo da intensidade no bloco certo de cada fileira.
function updateFireIntensityPerPixel (currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth

    // Se o pixel de baixo for maior que o canvas, não faça nada.
    if (belowPixelIndex >= fireWidth * fireHeight) {
        return
    }

    // Declinio, desconto da intensidade do fogo.
    const decay = 1
    const belowPixelFireIntensity = firePixelsArray [belowPixelIndex]
    // Se a intensidade de baixo menos o desconto for >= a 0, atribui o valor da variável. Se não for, deixa igual a zero
    const newFireIntensity = belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

    firePixelsArray [currentPixelIndex] = newFireIntensity
}


// Renderiza o fogo.
function renderFire () {
    const debug = false
    let html = "<table cellpadding=0 cellspacing=0>"

    // Para cada pixel de ALTURA, é criado um table row <tr> (row).
    for (let row = 0; row < fireHeight; row++) { 
        html += "<tr>"

        // Para cada pixel de LARGURA, é criado um table data <td> (columm).
        for (let columm = 0; columm < fireWidth; columm++) {
            const pixelIndex = columm + (fireWidth * row)
            const fireIntensity = firePixelsArray [pixelIndex]

            if (debug === true) {
                html += "<td>"
                html += `<div class="pixel-index"> ${pixelIndex} </div>`;
                html += fireIntensity
                html += "</td>"
            } else {
                const color = fireColorsPalette [fireIntensity]
                const colorString = `${color.r}, ${color.g}, ${color.b}`
                html += `<td style="background-color: rgb (${colorString})">`
                html += "</td>"
            }
        }

        html += "</tr>"
    }
    html += "</table>"

    document.querySelector ("#canvasFogo").innerHTML = html
}

    // Função que cria o fogo usando a intensidade.
    function createFireSource() {
        for (let columm = 0; columm <= fireWidth; columm++) {
            const overFlowPixelIndex = fireWidth * fireHeight
            const pixelIndex = (overFlowPixelIndex - fireWidth) + columm

            // 36 é o total de quadrados da intenidade do fogo que vai de 0 ~ 36.
            firePixelsArray [pixelIndex] = 36 
        }
    }

start ()