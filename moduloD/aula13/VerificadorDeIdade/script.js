function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('input#txtano');
    let res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fgen = document.getElementsByName('radgen');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fgen[0].checked) {
            genero = 'Homem';
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'garoto.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            } else if(idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'jovem-homem.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            } else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-homem.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-homem.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            }
        } else if(fgen[1].checked) {
            genero = 'Mulher';
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'garota.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            } else if(idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'jovem-mulher.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            } else if(idade < 60) {
                //Adulto
                img.setAttribute('src', 'adulto-mulher.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            } else {
                //Idoso
                img.setAttribute('src', 'idoso-mulher.jpg');
                img.style.borderRadius = '50%';
                img.style.marginTop = '6px';
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }

}