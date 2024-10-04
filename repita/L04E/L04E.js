let cont = 1
let result = 0

do{
    let num = parseInt(prompt(`Digite o ${cont}º número`))
    result += num  
    cont++  
}while(cont <= 15)

alert(result)