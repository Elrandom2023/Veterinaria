function saludar(){
    alert("Hola querida mascota");
}

function presentarse(){
    alert("Te saluda El random");
}

const botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click",saludar);