
import { describe, test, expect, vi } from "vitest";
import { Producto } from "../src/producto.js";

describe("Pruebas de la clase Producto", () => {

    // CP01 - Crear producto
    test("CP01 - Crear un producto correctamente", () => {
        const producto = new Producto("P001", "Teclado", 350, 10);

        expect(producto).toBeInstanceOf(Producto);
    });

    // CP02 - Mostrar código
    test("CP02 - Mostrar el código correctamente", () => {
        const producto = new Producto("P001", "Teclado", 350, 10);

        expect(producto.codigo).toBe("P001");
    });

    // CP03 - Mostrar nombre
    test("CP03 - Mostrar el nombre correctamente", () => {
        const producto = new Producto("P001", "Teclado", 350, 10);

        expect(producto.nombre).toBe("Teclado");
    });

    // CP04 - Mostrar precio
    test("CP04 - Mostrar el precio correctamente", () => {
        const producto = new Producto("P001", "Teclado", 350, 10);

        expect(producto.precio).toBe(350);
    });

    // CP05 - Mostrar existencia
    test("CP05 - Mostrar la existencia correctamente", () => {
        const producto = new Producto("P001", "Teclado", 350, 10);

        expect(producto.existencia).toBe(10);
    });

    // CP06 - Mostrar información completa
    test("CP06 - Mostrar toda la información del producto", () => {
        const producto = new Producto("P001", "Teclado", 350, 10);

        const consola = vi.spyOn(console, "log").mockImplementation(() => {});

        producto.mostrarInformacion();

        expect(consola).toHaveBeenCalledWith("Código: P001");
        expect(consola).toHaveBeenCalledWith("Nombre: Teclado");
        expect(consola).toHaveBeenCalledWith("Precio: $350");
        expect(consola).toHaveBeenCalledWith("Existencia: 10");

        consola.mockRestore();
    });

    // CP07 - Crear segundo producto
    test("CP07 - Crear un segundo producto sin confundir sus datos", () => {
        const producto1 = new Producto("P001", "Teclado", 350, 10);
        const producto2 = new Producto("P002", "Mouse", 180, 5);

        expect(producto2.codigo).toBe("P002");
        expect(producto2.nombre).toBe("Mouse");
        expect(producto2.precio).toBe(180);
        expect(producto2.existencia).toBe(5);

        expect(producto1.codigo).toBe("P001");
        expect(producto1.nombre).toBe("Teclado");
    });

});
