function Verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    var res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) == '0'){
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-homem.jpg')
            } else if(idade < 21) {
                //Jovem  
                img.setAttribute('src', 'jovem-homem.jpg') 
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpg') 
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'bebe-mulher.jpg')
            } else if(idade < 21) {
                //Jovem  
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpg') 
            } else {
                //Idoso
                img.setAttribute('src', 'idosa-mulher.jpg') 
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}