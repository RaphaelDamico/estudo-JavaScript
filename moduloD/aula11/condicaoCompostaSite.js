function verificar(){
    var p = document.querySelector('input#txtpais').value;
    var res = document.querySelector('div#res');
    if(p == 'Brasil') {
        res.innerHTML = `<p>Você é Brasileiro</p>`;
    } else {
        res.innerHTML = `<p>Você é Estrangeiro</p>`;
    }
}