function carregar() {
    var msg = window.document.querySelector('#msg');
    var img = window.document.querySelector('#imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    
    msg.innerHTML = `A hora atual é <strong>${hora}h${min}</strong>`;

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = './assets/fotomanha.png'
        document.body.style.backgroundColor = '#f0c7a1'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = './assets/fototarde.png'
        document.body.style.backgroundColor = '#e08712'
    } else {
        //boa noite
        img.src = './assets/fotonoite.png'
        document.body.style.backgroundColor = '#9d3cde'
    }
}
