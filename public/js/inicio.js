function btn_cadastrar_index(){
    window.location.assign("../html/cadastro.html")
}

function btn_login_index(){
    window.location.assign("../html/login.html")
}


function troca_img(idImg,novaImg){


    document.getElementById(idImg).src = novaImg;
    document.getElementById(idImg).style.width = "55%"
    document.getElementById(idImg).style.transition = ""
}

//Post BD Cliente.api.post<T>();

