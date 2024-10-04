let dividendo = 12
let divisor = 3
let quociente = 0

if (divisor === 0) {
    console.log("Divisão por zero não é permitida!")
} else {
    do {
        dividendo -= divisor
        quociente++
    } while (dividendo >= divisor)

    console.log("Resultado:", quociente)
}