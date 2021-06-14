function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date()
    //var hora = data.getHours()
   var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'morning.png'
        document.body.style.background = '#F5E99E'
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde
        img.src = 'afternoon.png'
        document.body.style.background = '#975F5F'
    } else {
        // Boa noite
        img.src = 'night.png'
        document.body.style.background = '#0C56AF'
    }
}
