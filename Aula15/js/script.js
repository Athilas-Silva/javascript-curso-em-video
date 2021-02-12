function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    //Condição para vereficar se o ano é maior que o atual
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else{
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value)
        var genero = ''
        //adicionando imagem via JavaScript
        var img = document.createElement("img")
        //atribuindo uma ID e o nome da ID no elemento img
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/crianca-homem.png')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', './img/jovem-homem.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', './img/homem-adulto.jpg')
            }
            else{
                //Idoso
                img.setAttribute('src', './img/idoso-homem.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', './img/crianca-mulher.jpg')
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('scr', './img/jovem-mulher.jpg')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', './img/mulher-adulta.jpg')
            }
            else{
                //Idosa
                img.setAttribute('src', './img/idosa-mulher.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        //adicionando o elemento img
    }
}