function tabuada(){
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if(num.value.length == 0){
        alert("Digite um número")
    }
    else{
        let n = Number(num.value)
        //limpando a tabela 
        tab.innerHTML = ""
        //acrescetando os números com o for
        for(let c = 1; c <= 10; c++){
            //criando um elemento de option para a taboada
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}