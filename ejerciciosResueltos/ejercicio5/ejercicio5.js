const invertStrig = str => {
    if (!str) return console.warn('No ingreso nada');
    if (typeof str !== 'string') return console.warn('Debe ingresar una cadena de texto');
    return console.log(str.split('').reverse().join(''));
};

invertStrig('Hola Mundo');
