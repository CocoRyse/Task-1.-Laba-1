document.addEventListener('DOMContentLoaded', () => {
    const input = prompt("Слова на вход пожалуйста");

    if (!input) {
        alert('Не хотите — не надо');
        return
    }

    const words = input.toLowerCase().split(', ');
    const validLetters = getLetters(words[0]);
    let result = ``;

    Array.from(words.slice(1)).forEach(word => {
        result += `${word} — ${processWord(word, validLetters)}, `
    });

    alert(`Итого: ${result.slice(0, result.length - 2)}`)
});

function getLetters(word) {
    let validLetters = {};

    Array.from(word).forEach(letter => {
        if (validLetters[letter]) {
            validLetters[letter] += 1;
        } else {
            validLetters[letter] = 1
        }
    });

    return validLetters
}

function processWord(word, validLetters) {
    const currentLetters = getLetters(word);
    let result = 0;

    for (let letter in currentLetters) {
        if (!validLetters[letter]) {
            result += currentLetters[letter];
        } else if (validLetters[letter] < currentLetters[letter]) {
            result += currentLetters[letter] - validLetters[letter];
        }
    }

    return result
}