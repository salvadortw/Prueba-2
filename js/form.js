$(document).ready(function() {
    // Función para validar RUT
    const validarRUT = (rut) => {
        return rut.length >= 9 && rut.length <= 10;
    };

    // Función para validar nombre y apellidos
    const validarTexto = (texto, min, max) => {
        return texto.length >= min && texto.length <= max;
    };

    // Función para validar edad
    const validarEdad = (edad) => {
        return edad >= 18 && edad <= 35;
    };

    // Función para validar celular
    const validarCelular = (celular) => {
        return celular.length >= 9 && celular.length <= 12;
    };

    // Función para validar email
    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Función para mostrar errores
    const mostrarError = ($input, $error, $vacio) => {
        if (!$input.val()) {
            $vacio.removeClass('hide');
            $error.addClass('hide');
            $input.addClass('error');
        } else {
            $vacio.addClass('hide');
            $error.removeClass('hide');
            $input.addClass('error');
        }
    };

    // Función para mostrar éxito
    const mostrarExito = ($input, $error, $vacio) => {
        $error.addClass('hide');
        $vacio.addClass('hide');
        $input.removeClass('error').addClass('valid');
    };

    // Validación de campos
    $('#rut').on('input', function() {
        if (validarRUT($(this).val())) {
            mostrarExito($(this), $('#rut-error'), $('#rut-vacio'));
        } else {
            mostrarError($(this), $('#rut-error'), $('#rut-vacio'));
        }
    });

    $('#nombre').on('input', function() {
        if (validarTexto($(this).val(), 3, 10)) {
            mostrarExito($(this), $('#nombre-error'), $('#nombre-vacio'));
        } else {
            mostrarError($(this), $('#nombre-error'), $('#nombre-vacio'));
        }
    });

    $('#apellidop').on('input', function() {
        if (validarTexto($(this).val(), 3, 20)) {
            mostrarExito($(this), $('#apellidop-error'), $('#apellidop-vacio'));
        } else {
            mostrarError($(this), $('#apellidop-error'), $('#apellidop-vacio'));
        }
    });

    $('#apellidom').on('input', function() {
        if (validarTexto($(this).val(), 3, 20)) {
            mostrarExito($(this), $('#apellidom-error'), $('#apellidom-vacio'));
        } else {
            mostrarError($(this), $('#apellidom-error'), $('#apellidom-vacio'));
        }
    });

    $('#edad').on('input', function() {
        if (validarEdad($(this).val())) {
            mostrarExito($(this), $('#edad-error'), $('#edad-vacio'));
        } else {
            mostrarError($(this), $('#edad-error'), $('#edad-vacio'));
        }
    });

    $('#celular').on('input', function() {
        if (validarCelular($(this).val())) {
            mostrarExito($(this), $('#celular-error'), $('#celular-vacio'));
        } else {
            mostrarError($(this), $('#celular-error'), $('#celular-vacio'));
        }
    });

    $('#email').on('input', function() {
        if (validarEmail($(this).val())) {
            mostrarExito($(this), $('#email-error'), $('#email-vacio'));
        } else {
            mostrarError($(this), $('#email-error'), $('#email-vacio'));
        }
    });

    // Validación al enviar el formulario
    $('form').on('submit', function(event) {
        event.preventDefault();

        let isValid = true;
        const $inputs = $('#rut, #nombre, #apellidop, #apellidom, #edad, #celular, #email');
        $inputs.each(function() {
            if (!$(this).hasClass('valid')) {
                isValid = false;
                $(this).trigger('input');
            }
        });

        if (isValid) {
            alert('Formulario enviado con éxito.');
        } else {
            alert('Por favor, corrige los errores en el formulario.');
        }
    });
});

$(document).ready(function() {
    // Otras funciones de validación y manejo del formulario aquí...

    // Función para generar la carta de presentación
    $('#crear-carta').on('click', function() {
        const rut = $('#rut').val();
        const nombre = $('#nombre').val();
        const apellidop = $('#apellidop').val();
        const apellidom = $('#apellidom').val();
        const email = $('#email').val();
        const celular = $('#celular').val();
        const edad = $('#edad').val();
        const profesion = $('#profesion').val();
        const fechanac = $('#fechanac').val();
        const genero = $('#genero').val();
        const motivo = $('#motivo').val();

        // Generar la carta de presentación
        const cartaPresentacion = `Estimados señores:

Me dirijo a ustedes para expresar mi interés en la posición que han publicado. Mi nombre es ${nombre} ${apellidop} ${apellidom}, RUT ${rut}. Tengo ${edad} años y actualmente trabajo como ${profesion}.

A continuación, les presento una breve descripción de mi perfil:

- Email: ${email}
- Número Celular: ${celular}
- Fecha de Nacimiento: ${fechanac}
- Género: ${genero}
- Motivación para postular: ${motivo}

Quedo a su disposición para ampliar esta información en una entrevista personal. Agradezco su consideración y quedo a la espera de su respuesta.

Atentamente,
${nombre} ${apellidop} ${apellidom}`;

        // Mostrar la carta generada en una alerta
        alert('Carta de presentación generada:\n\n' + cartaPresentacion);
    });
});

