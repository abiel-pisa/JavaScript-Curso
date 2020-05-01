function verificar(){
    let first = window.document.getElementById('txtfirst')
    let last = window.document.getElementById('txtlast')
    var step = window.document.getElementById('txtstep')
    let res = window.document.getElementById('res')
    
    if (first.value.length == 0 || last.value.length == 0 || step.value.length == 0){
        res.innerHTML = 'Impossivel contar'
    }else{   
        res.innerHTML='Contando:'
        let f = Number(first.value)
        let l = Number(last.value)
        let s = Number(step.value)
        if (s <= 0){
            alert('Passo inválido! Considerando como 1.')
            s = 1
        }
        if(f<l){
            //contagem crescente
            for(let c = f; c <=l; c+=s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem regreciva
            for(let c = f; c >= l; c -= s){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}
