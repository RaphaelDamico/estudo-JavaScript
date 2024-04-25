function carregar() {
    let msg = document.querySelector('div#msg');
    let img = document.querySelector('img#foto');
    let data = new Date();
    let hora = data.getHours().toString().padStart(2, '0');
    let minuto = data.getMinutes().toString().padStart(2, '0');
    let segundo = data.getSeconds().toString().padStart(2, '0');
    msg.innerHTML= `<strong>Agora são ${hora}:${minuto}:${segundo}hrs.</strong>`;
    if(hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'manha.jpg';
        document.body.style.backgroundImage = "url('manhaBg.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
    } else if( hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.jpg';
        document.body.style.backgroundImage = "url('tardeBg.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
    } else {
        //Boa noite
        img.src = 'noite.jpg';
        document.body.style.backgroundImage = "url('noiteBg.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
    }
    setInterval(carregar);
}
