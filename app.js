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

function sortearAmigo(){
    if(amigos.length == 0){
        asignarTextoElemento('h2', 'No has ingresado ningún amigo a la lista');
        return;
    }
    const x = Math.floor(Math.random()* amigos.length);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Tu amigo secreto es: ${amigos[x]}</li>`;
}

asignarTextoElemento("h1", "Amigo Secreto 🤐")