import { Persona } from './registro.js';

let intentosFallidos = 0;
const MAX_INTENTOS = 3;

function iniciarSesion() {
    const correo = document.getElementById('correo').value;
    const clave = document.getElementById('clave').value;

    const personaRegistrada = obtenerPersonaRegistrada(correo);

    if (personaRegistrada && personaRegistrada.clave === clave) {
        alert("¡Inicio de sesión exitoso!");
        // Aquí puedes redirigir al usuario a la página de inicio de sesión exitoso
    } else {
        intentosFallidos++;
        document.getElementById('mensajeError').innerHTML = "Los datos ingresados no son correctos.";
        document.getElementById('mensajeError').style.display = 'block';
        
        if (intentosFallidos >= MAX_INTENTOS) {
            document.getElementById('mensajeError').innerHTML = "Se ha superado el número máximo de intentos. La cuenta será bloqueada por 24 horas.";
            document.getElementById('mensajeError').style.display = 'block';
            // Aquí puedes implementar la lógica para bloquear la cuenta por 24 horas
        }
    }
}

function obtenerPersonaRegistrada(correo) {
    return personasRegistradas.find(persona => persona.correo === correo);
}

