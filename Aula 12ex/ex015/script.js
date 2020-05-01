function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (nascimento.value.length == 0 || nascimento.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'bebe-m.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else{
                //velho
                img.setAttribute('src', 'velho-m.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'bebe-f.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                //velho
                img.setAttribute('src', 'velho-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}