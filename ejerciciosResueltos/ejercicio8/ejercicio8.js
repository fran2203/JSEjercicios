const deletePattern = (str, patt) => {
    if (!str && !patt) return console.warn('Debe llenar ambos campos');

    const newStr = str.split(patt).join('');
    return console.log(`Nueva frase: ${newStr}`);
};

deletePattern('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz');
