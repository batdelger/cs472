window.onload = function () {
    "use strict";

    const btnBigger = document.getElementById('btnBigger');
    const inputText = document.getElementById('inputText');
    const checkbox = document.getElementById('checkbox');
    const btnAtinlay = document.getElementById('btnAtinlay');
    const btnMalkovitch = document.getElementById('btnMalkovitch');

    const makeBigger = function () {
        if (inputText.style.fontSize) {
            let fsize = parseInt(inputText.style.fontSize);
            inputText.style.fontSize = fsize + 2 + 'pt';
        }
        else {
            inputText.style.fontSize = '24pt';
        }
    }

    const decorate = function () {
        makeBigger();
        if (checkbox.checked) {
            inputText.style.fontWeight = 'bold';
            inputText.style.color = 'green';
            inputText.style.textDecoration = 'underline';
            document.body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
        } else {
            inputText.style.fontWeight = '';
            document.body.style.backgroundImage = "";
        }
    }

    const isVowel = function (c) {
        return c == "A" || c == "E" || c == "I" || c == "O" || c == "U" ||
            c == "a" || c == "e" || c == "i" || c == "o" || c == "u";
    }

    const moveConsonantToEnd = function (word) {
        const chars = word.split('');
        const pos = chars.findIndex(isVowel);

        for (let i = 0; i < pos; i++) {
            chars.push(chars.shift());
        }

        return chars.join('');
    }

    const doPigLatin = function () {
        let words = inputText.value.trim().split(' ');

        words = words.map(w => {
            if (w) {
                if (isVowel(w[0])) {
                    return w + 'ay';
                } else {
                    return moveConsonantToEnd(w) + 'ay';
                }
            }
            return w;
        });

        inputText.value = words.join(' ');
    }

    const doMalkovich = function () {
        let words = inputText.value.trim().split(' ');

        words = words.map(w => {
            if (w.length >= 5) {
                return 'Malkovich';
            }
            return w;
        });

        inputText.value = words.join(' ');
    }


    let timer = 0;
    btnBigger.addEventListener('click', () => {
        if (!timer) {
            timer = setInterval(() => {
                makeBigger();
            }, 500);
        }
        else {
            clearInterval(timer);
            timer = 0;
        }
    });

    btnAtinlay.addEventListener('click', doPigLatin);
    btnMalkovitch.addEventListener('click', doMalkovich);

    checkbox.addEventListener('change', () => {
        decorate();
    });

}
