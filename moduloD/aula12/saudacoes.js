let agora = new Date();
let hora = agora.getHours();
let minuto = agora.getMinutes();
let periodo;
if(hora >= 6 && hora < 12) {
    periodo = "manhã";
    console.log('Bom dia!');
} else if(hora >= 12 && hora < 18) {
    periodo = "tarde";
    console.log('Boa tarde!');
} else {
    periodo = 'noite';
    console.log('Boa noite!');
}
console.log(`São ${hora}:${minuto} da ${periodo}`)