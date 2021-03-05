//* Sin usar inputs del usuario
// const characters = str => {
//     if (typeof str === 'string') {
//         console.log(`El largo de la cadena '${str}' es de ${str.length} caracteres`);
//     } else {
//         console.log('Debe introducir un string');
//     }
// };

// characters();

//* Usando inputs del usuario
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const existingParagraph = document.getElementById('parrafoRespuesta');

    if (existingParagraph === null) {
        const paragraph = document.createElement('p');
        paragraph.id = 'parrafoRespuesta';

        const { value, type } = form.cadena;
        // En caso de que el usuario modifique el HTML, será avisado de que deberá
        // recargar la página

        if (type === 'text') {
            paragraph.textContent = `El largo de la cadena '${value}' es de ${value.length} caracteres`;
        } else {
            paragraph.textContent = 'Modificaste el HTML, recargá la página';
        }

        form.after(paragraph);
    } else {
        const { value, type } = form.cadena;

        if (type === 'text') {
            existingParagraph.textContent = `El largo de la cadena '${value}' es de ${value.length} caracteres`;
        } else {
            existingParagraph.textContent = 'Modificaste el HTML, recargá la página';
        }
    }

    form.reset();
});
