let num = document.getElementById('txtn')
let lista = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function add(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${Number(num.value)} foi adicionado a lista`
        lista.appendChild(item)

    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function fin(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let i in valores){
            soma += valores[i]
            if (valores[i] >= maior){
                maior = valores[i]
            }
            if (valores[i] <= menor){
                menor = valores[i]
            }
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<br>Ao todo, temos ${total} números cadastrados`
        res.innerHTML += `<br>O maior número informado foi ${maior} `
        res.innerHTML += `<br>O menor número informado foi ${menor}`
        res.innerHTML += `<br>Somando todos os números, temos ${soma}`
        res.innerHTML += `<br> A média dos valores digitados é ${media}`
    }
}