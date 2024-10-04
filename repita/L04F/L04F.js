let totalArea = 0
let continuar

do {
    let name = prompt("Digite o nome do cômodo")
    let largura = parseFloat(prompt("Digite a largura do cômodo"))
    let comprimento = parseFloat(prompt("Digite o comprimento do cômodo"))

    let area = largura * comprimento
    totalArea += area

    alert(`A área do ${name} é: ${area.toFixed(2)}m²`)

    continuar = prompt("Deseja continuar? (s/n)")

} while (continuar !== "n")

alert(`A área total acumulada da residência é: ${totalArea.toFixed(2)} m²`)