const validation = (input, focusInput) => {
    const error = {};

    // Validar el input de número de tarjeta
    if (focusInput === 'numeroCard' && input.numeroCard !== '') {
        if (!/^[0-9]+$/.test(input.numeroCard)) {
            error.numeroCard = 'solo numeros del 0 al 9';
        }
    }

    // Validar el input de nombre
    if (focusInput === 'nombreCard' && input.nombreCard !== '') {
        if (!/^[a-zA-Z]+$/.test(input.nombreCard)) {
            error.nombreCard = 'debe contener solo letras de a a la z';
        }
    }

    // Validar el input de apellido
    if (focusInput === 'apellidoCard' && input.apellidoCard !== '') {
        if (!/^[a-zA-Z]+$/.test(input.apellidoCard)) {
            error.apellidoCard = 'debe contener solo letras de a a la z';
        }
    }

    // Validar el input de DNI
    if (focusInput === 'DNICard' && input.DNICard !== '') {
        if (!/^[0-9]+$/.test(input.DNICard)) {
            error.DNICard = 'solo numeros del 0 al 9';
        }
    }

    // Validar el input de fecha de expiración
    if (focusInput === 'fechaCard' && input.fechaCard !== '') {
        const fechaArray = input.fechaCard.split('/');

        if (fechaArray.length !== 2) {
            error.fechaCard = 'se espera XX/XX';
        } else {
            const mes = fechaArray[0];
            const año = fechaArray[1];

            if (!/^(0[1-9]|1[0-2])$/.test(mes)) {
                error.fechaCard = 'El mes debe ser un número entre 01 y 12';
            }

            if (!/^(19\d{2}|20[0-9]{2})$/.test(año)) {
                error.fechaCard = 'El año debe ser un número entre 1900 y 2099';
            }
        }
    }

    // Validar el input de CVC
    if (focusInput === 'cvcCard' && input.cvcCard !== '') {
        if (!/^[0-9]{3}$/.test(input.cvcCard)) {
            error.cvcCard = 'solo acepta 3 numeros del 0 al 9';
        }
    }

    return error;
};

export default validation;