// La matriz que almacenará los datos de los usuarios
let users = [];
const form = document.getElementById('registration-form');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    // Obtener los valores de los campos
    const newUser = {
        id: Date.now(), // ID único para cada usuario
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        contrasena: document.getElementById('contrasena').value,
        confirmarContrasena: document.getElementById('confirmar-contrasena').value
    };

    // Validar si las contraseñas coinciden
    if (newUser.contrasena !== newUser.confirmarContrasena) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return;
    }

    // Almacenar  en la matriz
    users.push(newUser);
    console.log('Usuario Creado:', newUser);
    console.log('Matriz de usuarios actual:', users);

    // Convertir la matriz a formato JSON
    const usersJSON = JSON.stringify(users, null, 2);
    console.log('Datos en formato JSON:\n', usersJSON);
    alert('¡Registro exitoso! Los datos se han guardado en la memoria.');

    // Limpiar el formulario
    form.reset();
});