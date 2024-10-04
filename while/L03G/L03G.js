let a = 1
let b = 1
let cont = 0
console.log(a)
console.log(b)

while (cont < 13) {
    let prox = a + b
    console.log(prox)
    a = b
    b = prox
    cont++
}