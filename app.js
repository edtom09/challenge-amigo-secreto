let amigos = []; 

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    const nuevoAmigo = document.getElementById('amigo').value;
    const regex = /^[a-zA-Z\s]+$/; // Permite solo letras y espacios
    
    if (regex.test(nuevoAmigo)){
        //Lo agregamos a la lista 
        amigos.push(nuevoAmigo);
        //Limpiamos el input
        document.getElementById('amigo').value = '';
        //Actualizar la lista en la interfaz
        mostrarAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
    console.log(amigos);

}

function mostrarAmigos(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

asignarTextoElemento("h1", "Amigo Secreto 🤐")