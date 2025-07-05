function conte() {
    var ini = document.getElementById('ini');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var res = document.getElementById('res')
    res.innerHTML = ""

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("#Erro, dados inválidos")
    } else {
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        let conta = i
        if (p === 0) {
            alert("#Erro, considerando passo 1")
            p = 1
        }
        if (conta < f) {
            while (conta <= f) {
                res.innerHTML += ` ${conta} 👉`
                conta += p
            }
        } else {
            while (conta >= f) {
                res.innerHTML += ` ${conta} 👉`
                conta -= p
            }
        }
        res.innerHTML += ` 🚩`
    }
}