// Obtener el formulario
const loginForm = document.getElementById('login-form');

// Agregar un evento de escucha para el envío del formulario
loginForm.addEventListener('submit', function(event) {
    // Detener el envío del formulario predeterminado
    event.preventDefault();

    // Obtener los valores de usuario y contraseña del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar que se hayan ingresado datos en ambos campos
    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, ingresa tu nombre de usuario y contraseña.');
        return;
    }

    // Si los campos no están vacíos, puedes enviar el formulario al servidor
    // Puedes usar AJAX o simplemente enviar el formulario de forma predeterminada
    loginForm.submit();
});
