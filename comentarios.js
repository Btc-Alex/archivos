// Este script manejará la lógica del formulario de comentarios

// Cargar comentarios almacenados en localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    cargarComentariosGuardados();
});

function cargarComentariosGuardados() {
    // Recupera los comentarios almacenados en localStorage
    var comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    // Muestra los comentarios en el contenedor
    var comentarioContainer = document.getElementById("comentariosContainer");
    comentariosGuardados.forEach(function(comentario) {
        var nuevoComentario = document.createElement("div");
        nuevoComentario.textContent = comentario;
        comentarioContainer.appendChild(nuevoComentario);
    });
}

function guardarComentario(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var commentText = document.getElementById("commentText").value;

    if (username.trim() === "" || commentText.trim() === "") {
        alert("Por favor, completa todos los campos");
        return;
    }

    var comentarioContainer = document.getElementById("comentariosContainer");
    var nuevoComentario = document.createElement("div");
    nuevoComentario.textContent = username + ": " + commentText;
    comentarioContainer.appendChild(nuevoComentario);

    // Guarda el comentario en localStorage
    guardarComentarioEnLocalStorage(username + ": " + commentText);

    document.getElementById("username").value = "";
    document.getElementById("commentText").value = "";
}

function guardarComentarioEnLocalStorage(comentario) {
    // Recupera los comentarios almacenados en localStorage
    var comentariosGuardados = JSON.parse(localStorage.getItem("comentarios")) || [];

    // Agrega el nuevo comentario
    comentariosGuardados.push(comentario);

    // Guarda la lista actualizada de comentarios en localStorage
    localStorage.setItem("comentarios", JSON.stringify(comentariosGuardados));
}

// Asocia la función de guardarComentario al evento click del botón
document.getElementById("publicarBtn").addEventListener("click", guardarComentario);
