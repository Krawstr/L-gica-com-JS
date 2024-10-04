let base = 3
let expoente = 0

while (expoente <= 15) {
    let resultado = 1
    let i = 0

    while (i < expoente) {
        resultado *= base
        i++
    }

    console.log(`${base}^${expoente} = ${resultado}`)
    expoente++
}