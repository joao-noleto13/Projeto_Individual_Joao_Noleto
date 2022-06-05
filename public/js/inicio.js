
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


function trocar_video(){

    if(document.getElementById("video").style.display = "none" == true){

    document.getElementById("video2").style.display = "block"
}
else{
    document.getElementById("video").style.display = "none"
}
}