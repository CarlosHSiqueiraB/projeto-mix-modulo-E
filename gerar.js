function gerarT() {
    var num = document.getElementById('num')
    var res = document.getElementById('res')
    res.setAttribute('class', 'borda')
    res.innerHTML = ''
    if (num.value.length == 0) {
        alert("#Erro, informe o número!")
    } else {
        let n = Number(num.value)
        let base = 1
        while (base <= 10) {
            res.innerHTML += `${n} x ${base} = ${n * base} <br>`
            base++
        }
    }

}