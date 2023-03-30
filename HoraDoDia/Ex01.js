function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var txt1 = window.document.querySelector('div#txt1')
    var img = window.document.getElementById('imagem')

    if (hora <= 12){
        txt1.innerHTML = `Agora são ${hora} horas. Bom Dia!`
        img.src = 'manha.png'
        document.body.style.background = "yellow"
    } else if (hora <= 18){
        txt1.innerHTML = `Agora são ${hora} horas. Boa Tarde!`
        img.src = 'tarde.png'
        document.body.style.backgroundColor = "rgb(121, 100, 6);"
    } else{
        txt1.innerHTML = `Agora são ${hora} horas. Boa Noite!`
        img.src = 'noite.png'
        document.body.style.background = 'rgb(77, 63, 2)';
    }
}