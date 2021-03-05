const deletePattern = (str, patt) => {
    if (!str && !patt) return console.warn('Debe llenar ambos campos');

    let i = 0;
    while (str.indexOf(patt, i) !== -1) {
        if (str.indexOf(patt, i) !== -1) {
            i = str.indexOf(patt, i) + 1;
        }
    }
};
