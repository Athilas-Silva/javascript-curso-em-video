function contar(){
    var inicio = document.getElementById("txti")
    var fim = document.getElementById("txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        alert("[ERRO] Faltam dados")    
    }
    else{
        res.innerHTML = `Contando: <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert(`Passo inválido! Considerando o Passo 1`)
        }

        if(i < f){
            //Contagem Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else{
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}