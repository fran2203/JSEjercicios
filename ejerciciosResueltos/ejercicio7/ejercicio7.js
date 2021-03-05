const palindrome = str => {
    if (!str) return 'Debe introducir una palabra o frase';
    const phrase = str.toUpperCase();
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] !== phrase[phrase.length - (i + 1)]) return false;
    }
    return true;
};

console.log(palindrome('Neuquen'));
