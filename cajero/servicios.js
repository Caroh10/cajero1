class ServicioCajero {
    constructor(producto) {
        this.producto = producto;
        this.saldo = 0;
        this.movimientos = []; // Array para almacenar los movimientos
    }

    abonar(monto) {
        this.saldo += monto;
        console.log(`Abono de $${monto} realizado. Nuevo saldo: $${this.saldo}`);
        this.registrarMovimiento("Abono", monto);
    }

    retirar(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            console.log(`Retiro de $${monto} realizado. Nuevo saldo: $${this.saldo}`);
            this.registrarMovimiento("Retiro", monto);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        console.log(`Saldo disponible: $${this.saldo}`);
    }

    // Nuevo servicio: Registrar movimiento
    registrarMovimiento(tipo, monto) {
        this.movimientos.push({ tipo: tipo, monto: monto });
    }

    // Nuevo servicio: Consulta de movimientos
    consultaMovimientos() {
        console.log("¡Bienvenido al área de Consulta de movimientos!");
        console.log("Historial de movimientos:");
        console.log("***************************************");
        console.log("Tipo\t\tMonto\t\t Saldo");
    }}
