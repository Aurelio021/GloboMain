function nComentario(){
    /*let usuario = document.getElementById("user").value;*/
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("new-comment").value;
    let text = document.createElement(valorIngresado);
    box.appendChild(text)

    if(valorIngresado === ''){
        alert("error");
        /*const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Error: El usuario no tiene permisos.";
        errorMessage.style.display = "block";*/
    } else{
        document.getElementById("comentarios").appendChild(li);   
    }

    document.getElementById("new-comment").value = "";
    li.className = "comentario";

    let borrar = document.createElement("p");
    borrar.innerHTML = ("Borrar");
    borrar.className = "close";
    li.appendChild(borrar);

    let close = document.getElementsByClassName("close");
    for(let i = 0; i <close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}