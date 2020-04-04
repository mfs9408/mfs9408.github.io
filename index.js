document.getElementById("text-input").oninput = function () {

    var val = this.value;
    let words = [];
    let letters = [];
    let translation = "";
    var alpabet = [];


    var language = function (text) {
        return /[а-я]/i.test(text);
    }
    console.log(language(val));

    if (language(val)) {
        alpabet = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я", "а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я", "   ", ".", ",", "—", "!", "?"];
    }

    else {
        alpabet = ["A", "B", "W", "G", "D", "E", "V", "Z", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "", "", "Q", "Y", "X", "", "", "", "a", "b", "w", "g", "d", "e", "v", "z", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "", "", "q", "y", "x", "", "", "", "   ", ".", ",", "—", "!", "?"];
    };


    var Morse = [" · − ", " − · · · ", " · − − ", " − − · ", " − · · ", " · ", " · · · − ", " − − · · ", " · · ", " · − − − ", " − · − ", " · − · · ", " − − ", " − · ", " − − − ", " · − − · ", " · − · ", " · · · ", " − ", " · · − ", " · · − · ", " · · · · ", " − · − · ", " − − − · ", " − − − − ", " − − · −", " − − · − − ", " − · − − ", " − · · − ", " · · − · · ", " · · − − ", " · − · − ", " · − ", " · − ", " − · · · ", " · − − ", " − − · ", " − · · ", " · ", " · · · − ", " − − · · ", " · · ", " · − − − ", "  − · − ", " · − · · ", " − − ", " − · ", " − − − ", " · − − · ", " · − · ", " · · · ", " − ", " · · − ", " · · − · ", " · · · · ", " − · − · ", " − − − · ", " − − − − ", " − − · − ", " − − · − − ", " − · − − ", " − · · − ", " · · − · · ", " · · − − ", " · − · − ", " · − ", "   ", " · · · · · · ", " · − · − · − ", " − · · · · − ", " − − · · − − ", " · · − − · · "];

    for (var i = 0; i <= val.length - 1; i++) {
        words.push(val[i]);
    }

    for (var j = 0; j <= words.length - 1; j++) {
        for (var k = 0; k <= alpabet.length - 1; k++) {
            if (words[j] == alpabet[k]) {
                letters.push(k);
            }
        }
    }
    for (var m = 0; m <= letters.length - 1; m++) {
        var symbol = Morse[letters[m]];
        translation = translation + symbol;
    }
    var output = document.getElementById("output");
    output.innerHTML = translation;
};
