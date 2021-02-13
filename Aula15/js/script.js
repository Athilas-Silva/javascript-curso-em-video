function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente");
    }
    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = " "
        var img = document.createElement("img") //criando um elemento de imagem
        img.setAttribute("id", "foto") //atribuindo uma id e nome para o elemento img
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade <= 2){
                //Bebe
                img.setAttribute("src", "./img/bebe-menino.jpg");
            }
            else if(idade >= 3 && idade <= 11){
                //Criança
                img.setAttribute("src", "./img/crianca-homem.jpg");
            }
            else if(idade >= 12 && idade <= 17){
                //Adolescente
                img.setAttribute("src", "./img/adolecente-homem.jpg");
            }
            else if(idade >= 18 && idade <= 30){
                //Jovem Adulto
                img.setAttribute("src", "./img/jovem-homem.jpg");
            }
            else if(idade >= 31 && idade <= 49){
                //Adulto
                img.setAttribute("src", "./img/homem-adulto.jpg");
            }
            else if(idade >= 50 && idade <= 64){
                //Idoso 1
                img.setAttribute("src", "./img/idoso-homem.jpg");
            }
            else{
                //Idoso 2
                img.setAttribute("src", "./img/homem-idoso.jpg")
            }
        }
        else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 2){
                //Bebe
                img.setAttribute("src", "./img/bebe-menina.jpg")
            }
            else if(idade >= 3 && idade <= 11){
                //Criança
                img.setAttribute("src", "./img/crianca-mulher.jpg")
            }
            else if(idade >= 12 && idade <= 17){
                //Adolescente
                img.setAttribute("src", "./img/adolescente-mulher.jpg")
            }
            else if(idade >= 18 && idade <= 30){
                //Jovem Adulto
                img.setAttribute("src", "./img/jovem-mulher.jpg")
            }
            else if(idade >= 31 && idade <= 49){
                //Adulto
                img.setAttribute("src", "./img/mulher-adulta.jpg")
            }
            else if(idade >= 50 && idade <= 64){
                //Idoso 1
                img.setAttribute("src", "./img/adulta-mulher.jpg")
            }
            else{
                //Idoso 2
                img.setAttribute("src", "./img/idosa-mulher.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}