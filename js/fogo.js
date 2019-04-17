// fogo.js


const arrayPixelFogo = []
const larguraFogo = 80 // canvas.
const alturaFogo = 80 // canvas.

//Paleta de cores do fogo.
const paletaCoresFogo = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]



// Começam as funções criadas abaixo.
function comecar () {
    criarEstruturaBase()
    criarFogo()
    renderizarFogo()

    setInterval (calcularPropagacaoFogo, 50) // velocidade que carrega na tela.
}


// Cria a estrutura base do fogo.
function criarEstruturaBase () {
    const numeroPixel = alturaFogo * larguraFogo

    for (let i = 0; i < numeroPixel; i++) {
        arrayPixelFogo [i] = 0
    }
}


// Calcula a propagação do fogo.
function calcularPropagacaoFogo () {
    for (let coluna = 0; coluna < larguraFogo; coluna++) {
        for (let fileira = 0; fileira < alturaFogo; fileira++) {
            const pixelIndex = coluna + (larguraFogo * fileira)
            
            atualizaIntensidadeFogoPorPixel (pixelIndex)
        }
    }
    renderizarFogo()
}


// Faz o calculo da intensidade no bloco certo de cada fileira.
function atualizaIntensidadeFogoPorPixel (atualPixelIndex) {
    const abaixoPixelIndex = atualPixelIndex + larguraFogo

    // Se o pixel de baixo for maior que o canvas, não faça nada.
    if (abaixoPixelIndex >= larguraFogo * alturaFogo) {
        return
    }

    // Declinio, desconto da intensidade do fogo.
    const descontoIntensidadeFogo = Math.floor (Math.random() * 3) // Preencher de forma aleatória o fogo.
    const baseIntensidadeFogo = arrayPixelFogo [abaixoPixelIndex]
    // Se a intensidade de baixo menos o desconto for >= a 0, atribui o valor da variável. Se não for, deixa igual a zero
    const novaIntensidadeFogo = baseIntensidadeFogo - descontoIntensidadeFogo >= 0 ? baseIntensidadeFogo - descontoIntensidadeFogo : 0

    // Simula o vento no fogo !
    arrayPixelFogo [atualPixelIndex - descontoIntensidadeFogo] = novaIntensidadeFogo
}


// Renderiza o fogo.
function renderizarFogo () {
    const debug = false
    let html = "<table cellpadding=0 cellspacing=0>"

    // Para cada pixel de ALTURA, é criado um table fileira <tr> (fileira).
    for (let fileira = 0; fileira < alturaFogo; fileira++) { 
        html += "<tr>"

        // Para cada pixel de LARGURA, é criado um table data <td> (coluna).
        for (let coluna = 0; coluna < larguraFogo; coluna++) {
            const pixelIndex = coluna + (larguraFogo * fileira)
            const intensidadeFogo = arrayPixelFogo [pixelIndex]
            const cor = paletaCoresFogo [intensidadeFogo]
            const corString = `${cor.r}, ${cor.g}, ${cor.b}`

            if (debug === true) {
                html += "<td>"
                html += `<div class="pixel-index"> ${pixelIndex} </div>`
                // html += intensidadeFogo // APAGAR DEPOIS
                html += `<div style= "color: rgb(${corString})"> ${intensidadeFogo}</div>`
                html += "</td>"
            } else {
                html += `<td class="pixel" style="background-color: rgb(${corString})">`
                html += "</td>"
            }
        }
        html += "</tr>"
    }
    html += "</table>"
    document.querySelector ("#canvasFogo").innerHTML = html
}


    // Função que cria o fogo usando a intensidade.
    function criarFogo() {
        for (let coluna = 0; coluna <= larguraFogo; coluna++) {
            const preencherPixelIndex = larguraFogo * alturaFogo
            const pixelIndex = (preencherPixelIndex - larguraFogo) + coluna

            // 36 é o total de quadrados da intenidade do fogo que vai de 0 ~ 36.
            arrayPixelFogo [pixelIndex] = 36 
        }
    }

comecar ()