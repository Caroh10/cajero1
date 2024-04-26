class CajeroVirtual {
    constructor() {
        this.usuarios = new Array(10).fill(null);
        this.contrasenas = new Array(10).fill(null);
        this.saldos = new Array(10).fill(null);
        this.usuarioActual = -1;
        this.movimientos = new Array(10).fill(null).map(() => new Array(2));
        this.tiposMovimientos = new Array(10).fill(null);
        this.indiceMovimiento = 0;
    }

    inicio() {
        console.log("¡Bienvenido al cajero virtual! Elige una opción para iniciar:");
        console.log("1. Registrarse");
        console.log("2. Iniciar Sesión");
        console.log("3. Salir");

        let opcion = prompt("Seleccione una opción:");

        switch (opcion) {
            case '1':
                this.registrarUsuario();
                break;
            case '2':
                this.iniciarSesion();
                break;
            case '3':
                console.log("Gracias por usar el Cajero Virtual. ¡Hasta luego!");
                break;
            default:
                console.log("Opción incorrecta. Por favor, seleccione una opción válida.");
                this.inicio();
        }
    }

    registrarUsuario() {
        console.log("¡Bienvenido al registro!");
        let nuevoUsuario = prompt("Ingrese su nombre de usuario:");
        let nuevaContrasena = prompt("Ingrese una contraseña:");
        let nuevoSaldo = parseFloat(prompt("Ingrese el monto con el que desea abrir su cuenta:"));

        this.usuarios[this.usuarioActual + 1] = nuevoUsuario;
        this.contrasenas[this.usuarioActual + 1] = nuevaContrasena;
        this.saldos[this.usuarioActual + 1] = nuevoSaldo;

        console.log("Registro exitoso. Ahora puede iniciar sesión con su nuevo usuario.");
        this.iniciarSesion();
    }

    iniciarSesion() {
        let intentosFallidos = 0;
        let cuentaBloqueada = false;

        while (intentosFallidos < 3 && !cuentaBloqueada) {
            console.log("¡Bienvenido por favor inicie sesión!");
            let usuario = prompt("Ingrese su usuario:");
            let contrasena = prompt("Ingrese su contraseña:");

            for (let i = 0; i < this.usuarios.length; i++) {
                if (this.usuarios[i] !== null && this.usuarios[i] === usuario && this.contrasenas[i] === contrasena) {
                    this.usuarioActual = i;
                    console.log("Bienvenido, " + usuario + "!");
                    this.menuPrincipal();
                    return;
                }
            }

            intentosFallidos++;
            console.log("Sus datos son incorrectos. Por favor, intente nuevamente.");
            console.log("Intentos restantes: " + (3 - intentosFallidos));
            if (intentosFallidos >= 3) {
                cuentaBloqueada = true;
                console.log("Su cuenta ha sido bloqueada por 24 horas.");
            }
        }
    }

    menuPrincipal() {
        console.log("¡Este es su Menu Principal! ¿Qué desea realizar?");
        console.log("1. Retiro de capital");
        console.log("2. Abono de capital");
        console.log("3. Consultar saldo");
        console.log("4. Consulta movimientos");
        console.log("5. Cerrar sesión");

        let opcion = prompt("Seleccione una opción:");

        switch (opcion) {
            case '1':
                this.retiro();
                break;
            case '2':
                this.abono();
                break;
            case '3':
                this.consultarSaldo();
                break;
            case '4':
                this.consultaMovimientos();
                break;
            case '5':
                this.usuarioActual = -1;
                console.log("Sesión cerrada correctamente.");
                this.inicio();
                break;
            default:
                console.log("Opción incorrecta. Por favor, seleccione una opción válida.");
                this.menuPrincipal();
        }
    }

    retiro() {
        console.log("¡Bienvenido al área de retiros!");
        console.log("Su saldo actual es de: $" + this.saldos[this.usuarioActual]);

        let montoRetirar = parseFloat(prompt("Por favor ingrese el monto a retirar: $"));

        if (montoRetirar > this.saldos[this.usuarioActual]) {
            console.log("Saldo insuficiente");
            this.menuPrincipal();
            return;
        }

        this.saldos[this.usuarioActual] -= montoRetirar;
        console.log("Retiro exitoso. Su saldo actual es: $" + this.saldos[this.usuarioActual]);

        this.movimientos[this.indiceMovimiento][0] = montoRetirar;
        this.movimientos[this.indiceMovimiento][1] = this.saldos[this.usuarioActual];
        this.tiposMovimientos[this.indiceMovimiento] = "Retiro";
        this.indiceMovimiento++;

        this.menuPrincipal();
    }

    abono() {
        console.log("¡Bienvenido al área de abonos!");
        console.log("Su saldo actual es de: $" + this.saldos[this.usuarioActual]);

        let montoAbonar = parseFloat(prompt("Por favor ingrese el monto a abonar: $"));

        if (montoAbonar <= 0) {
            console.log("Error: Por favor ingrese un monto válido.");
            this.menuPrincipal();
            return;
        }

        this.saldos[this.usuarioActual] += montoAbonar;
        console.log("Abono realizado exitosamente. Su saldo actual es: $" + this.saldos[this.usuarioActual]);

        this.movimientos[this.indiceMovimiento][0] = montoAbonar;
        this.movimientos[this.indiceMovimiento][1] = this.saldos[this.usuarioActual];
        this.tiposMovimientos[this.indiceMovimiento] = "Abono";
        this.indiceMovimiento++;

        this.menuPrincipal();
    }

    consultarSaldo() {
        console.log("¡Bienvenido al área de consulta de saldo!");
        console.log("Su saldo actual es de: $" + this.saldos[this.usuarioActual]);
        this.menuPrincipal();
    }

    consultaMovimientos() {
        console.log("¡Bienvenido al área de Consulta de movimientos!");

        console.log("Historial de movimientos:");
        console.log("***************************************");
        console.log("Tipo\t\tMonto\t\t Saldo");
        console.log("***************************************");

        for (let i = 0; i < this.indiceMovimiento; i++) {
            console.log(this.tiposMovimientos[i] + "\t\t$" + this.movimientos[i][0] + "\t\t$" + this.movimientos[i][1]);
        }

        console.log("***************************************");

        this.menuPrincipal();
    }
}

let cajero = new CajeroVirtual();
cajero.inicio();



