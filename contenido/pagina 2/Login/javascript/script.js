document.addEventListener('DOMContentLoaded', () => {
    const formularioLogin = document.getElementById('formularioLogin');
    const btnIniciarSesion = document.getElementById('btnIniciarSesion');
    const btnRegistrar = document.getElementById('btnRegistrar');
    const mensajePantalla = document.getElementById('mensaje');

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
        { nombreUsuario: 'admin', contrasena: 'password123' },
        { nombreUsuario: 'usuario1', contrasena: 'abc' }
    ];

    // Operación: Iniciar Sesión 
    btnIniciarSesion.addEventListener('click', (e) => {
        e.preventDefault();
        const nombreUsuario = document.getElementById('nombreUsuario').value.trim();
        const contrasena = document.getElementById('contrasena').value.trim();

        if (nombreUsuario === '' || contrasena === '') {
            alert('Por favor, ingresa usuario y contraseña.');
            return;
        }

        const usuarioEncontrado = usuarios.find(usuario => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena);

        if (usuarioEncontrado) {
            mensajePantalla.textContent = `¡Bienvenido, ${nombreUsuario}!`;
            mensajePantalla.style.color = 'green';
            
            // Redirección a la landing page
            window.location.href = '../Landing_pagae/index.html'; 
            
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });

    btnRegistrar.addEventListener('click', () => {
        window.location.href = '../Registro/index.html';
    });
});