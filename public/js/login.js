function validarFormulario() {
    const usuarioInput = document.getElementById("usuario");

    if (usuarioInput.value.length < 2) {
        alert("El nombre de usuario debe tener al menos 2 caracteres.");
        return false;
    } else {
        return true;
    }
}
