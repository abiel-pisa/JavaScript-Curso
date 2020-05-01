let num = document.getElementById('txtnum')
let lista = document.getElementById('txtlista')
let res = window.document.getElementById('res')
let valores = []

function adicionar(){
    
    let c = 0
    let soma = 0
    if(numero.length == 0 || numero > 100 || numero < 0){
        alert('Valor inválido ou inesistente! Tente novamente')
    }else{
        let item = document.createElement('option')
        lista.appendChild(item)
        item.innerText= `Valor ${numero} adicionado`
        c ++
        soma += numero


    }
}
function final(){

}