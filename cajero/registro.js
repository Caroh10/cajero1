class Registro {
    constructor() {
        this.personas = [];
    }

    crearPersona(id, nombre, apellido, telefono, correo, clave) {
        const persona = new Persona(id, nombre, apellido, telefono, correo, clave);
        this.personas.push(persona);
        return persona;
    }

    obtenerPersonaPorCorreo(correo) {
        return this.personas.find(persona => persona.correo === correo);
    }
}

class Persona {
    constructor(id, nombre, apellido, telefono, correo, clave) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.clave = clave;
    }
}

function crearPersona() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const clave = document.getElementById('clave').value;
    const claveRepetida = document.getElementById('claveRepetida').value;

    const registro = new Registro();

    if (clave !== claveRepetida) {
        document.getElementById('errorClaves').style.display = 'block';
        return;
    }

    document.getElementById('errorClaves').style.display = 'none';

    const persona = registro.crearPersona(id, nombre, apellido, telefono, correo, clave);
    mostrarPersona(persona);
    mostrarResumenRegistro(persona);
}

function mostrarPersona(persona) {
    const datosRegistroDiv = document.getElementById('datosRegistro');
    datosRegistroDiv.innerHTML = `
        <h3>Resumen del Registro:</h3>
        <p>ID: ${persona.id}</p>
        <p>Nombre: ${persona.nombre}</p>
        <p>Apellido: ${persona.apellido}</p>
        <p>Teléfono: ${persona.telefono}</p>
        <p>Correo: ${persona.correo}</p>
    `;
}

function mostrarResumenRegistro(persona) {
    const resumenRegistroDiv = document.getElementById('resumenRegistro');
    resumenRegistroDiv
}