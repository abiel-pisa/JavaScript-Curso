function tabuada(){
    let numero = window.document.getElementById('txtnum')
    let tabuada = window.document.getElementById('seltab')
    let res = window.document.getElementById('res') 
    if (numero.value.length == 0){
        alert('[ERRO] Digite algum valor')
    }else{
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML=''
        while(c <=10){
            let item = document.createElement('option')
            item.innerText = `${n} X ${c} = ${n*c}`
            tabuada.appendChild(item)
            item.value = `tabuada${c}`
            c++
        }
    }
}