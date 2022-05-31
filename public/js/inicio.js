function btn_cadastrar_index() {
    window.location.assign("cadastro.html")
}

function btn_login_index() {
    window.location.assign("login.html")
}

/* Carrosel */

var lista_img = ['./imgs/dunk.jpg', './imgs/crias.jpg', './imgs/2_img_inicio.jpg', './imgs/img_inicio3.jpg'];

let count = 0;

setInterval(function() {
    img_inicio.style.transition = 'width 2s'
    img_inicio.style.width = 0;
    nextImage()
}, 6000)

function nextImage() {
count++;
if (count == 4) {
    count = 0;

}
setTimeout(function(){
    img_inicio.src = lista_img[count]
    img_inicio.style.width = '100%'
}, 8000)

}




//Post BD Cliente.api.post<T>();



/* Parte votos */

function caio() {
    window.location = 'votos.html#link_caio'
}

function dpc() {
    window.location = 'votos.html#link_dpc'
}

function ninja() {
    window.location = 'votos.html#link_ninja'
}