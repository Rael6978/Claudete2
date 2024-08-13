console.log("Script Carregado")

function CalcularAnos() {
    console.log("Botão de Calcular")
    let popAinput = document.getElementById("popA").value.trim()
    let taxaAinput = document.getElementById("TaxaA").value.trim()
    let popBinput = document.getElementById("popB").value.trim()
    let taxaBinput = document.getElementById("TaxaB").value.trim()
    if (popAinput ==="" || taxaAinput ==="" || popBinput ==="" || taxaBinput ===""){
        alert("Por favor, preencha todos os campos")
        return
    }
    
    let popA = parseInt(popAinput)
    let taxaA = parseInt(taxaAinput) / 100
    let popB = parseInt(popBinput)
    let TaxaB = parseInt(taxaBinput) / 100
    let anos = 0

    while (popA < popB) {
        popA *= (1 + taxaA)
        popB *= (1 + TaxaB)
        anos++
    }

    console.log("Anos Calculados", anos)
    let resultado = document.getElementById("resultado")
}
