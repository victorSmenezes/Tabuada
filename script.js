function Resolva() {
    var valor = document.getElementById("numero")
    var tbd = document.getElementById('tbd')


    if (valor.value.length == 0) {
        tbd.innerText = "Impossivel prosseguir"
        window.alert('[ERRO] Digite um número"')
        
    } else {
        let N = Number(valor.value)
        let C = 1
        tbd.innerHTML = ""

        while (C <= 10) {
            let item = document.createElement("option")
            item.text = `${N} x ${C} = ${N * C}`
            item.value = `tbd${C}`
            tbd.appendChild(item)
            C++
            tbd.style.width = '100px'
        }
    }

}