function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("foto");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Mensagem de Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 12 && hora <= 18){
        //Mensagem de Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else{
        //Mensagem de boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}