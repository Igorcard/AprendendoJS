function tabuada(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('seltab')

    if (num.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ''

        for(let t = 0 ; t <= 10 ; t++){
            let item = document.createElement('option')
            item.text = `${n} * ${t} = ${(n*t)}`
            item.value = `res${t}`
            res.appendChild(item)
        }
    }
}