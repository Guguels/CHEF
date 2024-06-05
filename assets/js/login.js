var intentos = 0;
const maxIntentos = 3;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
        
        if (intentos >= maxIntentos) {
            alert("Has alcanzado el número máximo de intentos.");
            return;
        }
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "" || password === "") {
            alert("Debes ingresar un correo y una contraseña.");
            return;
        }
        
        if (!validarCorreo(username)) {
            alert("Solo se permiten correos de Gmail.");
            intentos++;
            if (intentos >= maxIntentos) {
                alert("Has alcanzado el número máximo de intentos.");
            }
            return;
        }

        // Aquí puedes realizar la validación del usuario y la contraseña
        // Por ahora, solo imprimimos los valores
        console.log("Usuario:", username);
        console.log("Contraseña:", password);
        
        // Lógica de autenticación (permitimos cualquier contraseña)
        // Redirigir a la página después de iniciar sesión
        window.location.href = "Principal.html"; // Cambia "tarea12.html" por la URL de la página a la que quieres redirigir
    });
});

function validarCorreo(email) {
    var regexGmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regexGmail.test(email);
}


