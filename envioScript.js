function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var nombreValido = validarCampo(nombre, 'nombre');
    var direccionValida = validarCampo(direccion, 'direccion');
    var telefonoValido = validarTelefono();

    if (nombreValido && direccionValida && telefonoValido) {
        alert('El formulario fue enviado correctamente.');
        return true;
    } else {
        return false;
    }
}

function validarCampo(valor, campo) {
    if (valor.trim() === '') {
        document.getElementById(campo + '-error').textContent = 'El campo es obligatorio.';
        return false;
    } else {
        document.getElementById(campo + '-error').textContent = '';
        return true;
    }
}

function validarTelefono() {
    var telefono = document.getElementById('telefono').value;
    var regexTelefono = /^\d+$/;
    if (!regexTelefono.test(telefono)) {
        document.getElementById('telefono-error').textContent = 'El número de teléfono no es válido.';
        return false;
    } else {
        document.getElementById('telefono-error').textContent = '';
        return true;
    }
}