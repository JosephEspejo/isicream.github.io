document.addEventListener('DOMContentLoaded', function () {
    const precioInicial = 10.80;
    const contadorElement = document.getElementById('contador');
    const precioElement = document.getElementById('precio');
    const botonSumar = document.getElementById('sumar');
    const botonRestar = document.getElementById('restar');
    const botonGuardarCarrito = document.getElementById('guardarCarrito');

    function actualizarPrecio(cantidad) {
        const nuevoPrecio = (precioInicial * cantidad).toFixed(2);
        precioElement.innerHTML = `<strong>${nuevoPrecio} Bs</strong>`;
    }

    botonSumar.addEventListener('click', function () {
        let contador = parseInt(contadorElement.textContent);
        contador++;
        contadorElement.textContent = contador;
        actualizarPrecio(contador);
    });

    botonRestar.addEventListener('click', function () {
        let contador = parseInt(contadorElement.textContent);
        if (contador > 1) {
            contador--;
            contadorElement.textContent = contador;
            actualizarPrecio(contador);
        }
    });

    botonGuardarCarrito.addEventListener('click', function () {
        const contador = parseInt(contadorElement.textContent);
        const producto = 'MILENIUM DE ALMENDRAS';
        const precio = parseFloat((precioInicial * contador).toFixed(2));

        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push({ producto, cantidad: contador, precio });
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert('Producto guardado en el carrito');
    });
});