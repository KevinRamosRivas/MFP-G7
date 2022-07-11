const form = document.querySelector('.formulario');
const urlParams = new URLSearchParams(window.location.search);
const apellidos = urlParams.get('apellidos');
var apellidos2 = apellidos.toUpperCase();
apellidos2 = apellidos2.replace(/'/gi,"");

console.log(apellidos);

document.addEventListener('DOMContentLoaded', () => {
    if (urlParams.get('apellidos') === 'success') {
        showGod('El alumno '+apellidos2+' fue registrado exitosamente');
    }
    else{
        showError('El alumno '+apellidos2+' ya tiene una tardanza o falta registrada');
    }
})



const showGod = (error) => {
    swal.fire({
        text: error,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#48BB78'
    })
}
const showError = (error) => {
    swal.fire({
        text: error,
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#48BB78'
    })
}