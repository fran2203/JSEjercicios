/* eslint-disable no-plusplus */
const wordCounter = (str, pat) => {
    if (!str && !pat) return console.warn('Debe llenar ambos campos');
    let count = 0;
    let i = 0;
    while (str.indexOf(pat, i) !== -1) {
        if (str.indexOf(pat, i) !== -1) {
            count++;
            i = str.indexOf(pat, i) + 1;
        }
    }
    return count;
};

const word = wordCounter('Hola gente como andan aca probando Hola Hola', 'Hola');
console.log(word);
