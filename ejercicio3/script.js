function separar(str, separador) {
    const newStr = str.split(separador);

    return newStr;
}

const phrase = 'Hola que tal';

const str = separar(phrase, 'o');
console.log(str);
