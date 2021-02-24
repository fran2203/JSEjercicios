const recortar = (cadena, number) => {
    if (number > 0) {
        console.log(`La nueva cadena es '${cadena.substring(0, number)}'`);
    } else {
        console.warn('Introduzca un numero distinto a 0');
    }
};

recortar('hola', 2);
