function carregar () {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('fh')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()   
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minuto} minutos.`
    if(hora >= 0 && hora < 12) {
        //bom dia
        imgagem.src = "manha.jpg"
        window.document.body.style.background = '#FFD700'
    } else if(hora >= 12 && hora < 18) {
        //boa tarde
        imagem.src = "tarde.jpg"
        window.document.body.style.background = '#F4A460'
    } else {
        //boa noite
        imagem.src = "noite.jpg"
        window.document.body.style.background = '#7B68EE'	
    }
}
