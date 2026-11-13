
// Representación de un producto
export class Producto {
    constructor(codigo, nombre, precio, existencia) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.existencia = existencia;
    }

    // Método para mostrar la información
    mostrarInformacion() {
        console.log("----- INFORMACIÓN DEL PRODUCTO -----");
        console.log("Código: " + this.codigo);
        console.log("Nombre: " + this.nombre);
        console.log("Precio: $" + this.precio);
        console.log("Existencia: " + this.existencia);
    }
}

// Crear un producto
const producto1 = new Producto(
    "P001",
    "Laptop",
    15000,
    10
);

// Mostrar información
producto1.mostrarInformacion();
