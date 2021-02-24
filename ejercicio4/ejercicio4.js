const repeat = (str, n) => {
    if (typeof str !== 'string') return console.warn('No se ingreso un texto');
    if (typeof n !== 'number') return console.warn('El numero N digitado no es numero');
    if (n <= 0) return console.error('El numero N debe ser positivo');
    return console.log(`${str.repeat(n)}`);
};

const phrase = 'Hola';

repeat(phrase, 4);
