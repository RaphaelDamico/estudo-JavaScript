
    var corpo = document.body;
    corpo.style.background = "black"; //Irá alterar a cor de fundo da variável corpo

    var p1 = document.getElementsByTagName("p")[0]; //Vai selecionar o elemento 'p' na posição 0
    document.write(p1.innerText); //vai escrever na tela o texto do elemento selecionado
    document.write(p1.innerHTML); //Vai escrever na tela o texto do elemento selecionado FORMATADO
    p1.style.color = "blue"; //Irá alterar a cor do elemento p1 para azul

    var d = document.getElementById("msg"); //Vai selecionar o elemento id="msg"
    d.style.background = "green"; // Vai alterar a cor de fundo da div selecionada pelo id para verde
    d.innerText = "Estou Aguardando..."; // Vai alterar o texto dentro da div

    var d2= document.querySelector('div.slc')//Toda div é representada por # e toda classe é representada por .
    d2.style.background = 'blue'//Vai alterar a cor de fundo da div selecionada pelo seletor para azul
