function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(Number(fano.value.length) == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'circulo.png')
                genero += ' criança'
            } else if (idade < 21){
                img.setAttribute('src', 'circulo.png')
                genero += ' jovem'
            } else if (idade < 50){
                img.setAttribute('src', 'circulo.png')
                genero += ' adulto'
            } else{
                img.setAttribute('src', 'circulo.png')
                genero += ' idoso'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'circulo.png')
                genero += ' criança'
            } else if (idade < 21){
                img.setAttribute('src', 'circulo.png')
                genero += ' jovem'
            } else if (idade < 50){
                img.setAttribute('src', 'circulo.png')
                genero += ' adulta'
            } else{
                img.setAttribute('src', 'circulo.png')
                genero += ' idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}