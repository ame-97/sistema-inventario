
// Representación de un producto
class Producto {
    constructor(codigo, nombre, precio, existencia) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.existencia = existencia;
    }

    // Método para mostrar la información
    mostrarInformacion() {
        console.log("----- PRUEBA ERROR GIT -----");
        console.log("Código: " + this.codigo);
        console.log("Nombre: " + this.nombre);
        console.log("Precio: $" + this.precio);
        console.log("Existencia: " + this.existencia);
    }
}

// Crear productos
const productos = [
    new Producto("P001", "Laptop", 15000, 10),
    new Producto("P002", "Mouse", 250, 20),
    new Producto("P003", "Teclado", 500, 15),
    new Producto("P004", "Monitor", 3500, 8)
];

// Función para buscar productos por código
function buscarProducto(codigo) {
    const productoEncontrado = productos.find(
        producto => producto.codigo === codigo
    );

    if (productoEncontrado) {
        console.log("¡Producto encontrado!");
        productoEncontrado.mostrarInformacion();
    } else {
        console.log("Producto no encontrado.");
    }
}

// Realizar búsqueda
buscarProducto("P002");

