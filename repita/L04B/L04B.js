let cont = 1
let soma = 0

do{
    if (cont % 2 == 0){
        soma += cont    
    }
    cont = cont + 1
}while(cont <= 1500)

console.log(soma)