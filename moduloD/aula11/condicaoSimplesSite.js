function calcular() {
    var txtv = document.querySelector('input#txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtv.value);
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`;
    if(vel > 60) {
        res.innerHTML += `<p>Sua velocidade ${vel} Km/h está acima do permitido. <strong>MULTADO!</strong></p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;
}
