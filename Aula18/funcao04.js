function fatorial(n){ //função e parametro
    let fat = 1
    for(let c = n; c > 1; c--){
        fat*= c;
    }
    return fat //retorno
}
console.log(fatorial(5)) //chamada