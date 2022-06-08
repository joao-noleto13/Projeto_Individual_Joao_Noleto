
function btn_cadastrar_index() {
    window.location.assign("cadastro.html")
}

function btn_login_index() {
    window.location.assign("login.html")
}



let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count ++
    if(count > 4 ){
        count = 1
    }

    document.getElementById("radio" + count).checked = true

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


function trocar_video(video){

    document.getElementById('video').src = video

    if(document.getElementById('video').src  == video){

        document.getElementById('video').src = "./imgs/cesta step.mp4"
    }
}