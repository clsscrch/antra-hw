const Api = (() => {
    const url = "https://random-word-api.herokuapp.com/word";
    const getWord = () => fetch(url).then((res) => res.json()).catch(
        () => {
            const offlineWordList = [
                "ballot",
                "soil",
                "legislation",
                "valley",
                "country",
                "nail",
                "piano",
                "speech",
                "efflux",
                "reason",
                "alcohol",
                "stable",
                "slice",
                "situation",
                "profession",
                "restaurant",
                "pocket",
                "satisfaction",
                "condition",
                "comfortable"
            ]

            return [offlineWordList[Math.floor(Math.random() * offlineWordList.length)]];
        }
    );

    return {
        getWord
    }
})();

const View = (() => {

    const domSelector = {
        wordContainer: ".word__container",
        guessContainer: ".guess__container",
        button: ".button",
        inputLetter: ".input__letter",
    }

    const createSecretWord = (word) => {

        let template = '';
        word.forEach((letter) => {
            template += `<span class="word word__letter">${letter}</span>`;
        });
        return template;
    }

    const createGuessCount = (count) => {
        let template = `<span class="guess guess__count">${count}/10</span>`;
        return template;
    }

    const render = (ele, template) => {
        ele.innerHTML = template;
    }

    return {
        domSelector,
        createSecretWord,
        createGuessCount,
        render
    }

})();


const Model = ((api, view) => {
    const { getWord } = api;
    const { domSelector, createSecretWord, render } = view;


    class State {
        constructor() {
            this._guessCount = 0;
            this._currentWord = '';
            this._wordCount = 0;
            this._currentBlankWord = '';
        }

        reset() {
            this._guessCount = 0;
            this._currentWord = '';
            this._wordCount = 0;
            this._currentBlankWord = '';
        }

        get guessCount() {
            return this._guessCount;
        }

        set guessCount(count) {
            this._guessCount = count;

            let guessContainer = document.querySelector(domSelector.guessContainer);
            let template = view.createGuessCount(this._guessCount);
            view.render(guessContainer, template);
        }

        get currentWord() {
            return this._currentWord;
        }

        set currentWord(word) {
            this._currentWord = word;
        }

        get wordCount() {
            return this._wordCount;
        }

        set wordCount(count) {
            this._wordCount = count;
        }

        get currentBlankWord() {
            return this._currentBlankWord;
        }

        set currentBlankWord(word) {
            this._currentBlankWord = word;
        }

    }

    return {
        State,
        getWord
    }

})(Api, View);

const Controller = ((view, model) => {
    const { domSelector } = view;
    const { State, getWord } = model;

    const state = new State();

    const newWord = () => {
        getWord().then((data) => {
            state.currentWord = data[0];
            let wordContainer = document.querySelector(domSelector.wordContainer);

            let amtBlank = Math.floor(Math.random(1, state.currentWord.length) * (state.currentWord.length - 1) + 1);
            let wordCopy = state.currentWord.split('');

            for (let i = 0; i < amtBlank; i++) {
                let randomIndex = Math.floor(Math.random() * state.currentWord.length);

                if (wordCopy[randomIndex] === '_') {
                    i--;
                    continue;
                }

                wordCopy[randomIndex] = '_';
            }

            state.currentBlankWord = wordCopy.join('');


            let template = view.createSecretWord(state.currentBlankWord.split(''));
            view.render(wordContainer, template);
        });
    }

    const init = () => {
        state.reset();

        newWord();

        let guessContainer = document.querySelector(domSelector.guessContainer);
        let template = view.createGuessCount(state.guessCount);
        view.render(guessContainer, template);

    }

    const guess = () => {
        let letterInput = document.querySelector(domSelector.inputLetter);

        letterInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                if (letterInput.value === '' || !isNaN(Number(letterInput.value))) {
                    console.log('Invalid input');
                } else {
                    if (state.currentWord.indexOf(letterInput.value) === -1) {
                        state.guessCount++;
                        if (state.guessCount > 10) {
                            alert(`Game over! You have guessed ${state.wordCount} words!`);
                            console.log(state.currentWord);
                            init();
                            return;
                        }
                    } else {
                        let wordContainer = document.querySelector(domSelector.wordContainer);
                        let word = state.currentWord.split('');
                        let blankWord = state.currentBlankWord.split('');
                        let template = '';

                        for (let i = 0; i < word.length; i++) {
                            if (word[i] === letterInput.value) {
                                blankWord[i] = letterInput.value;
                            }
                        }

                        state.currentBlankWord = blankWord.join('');

                        template = view.createSecretWord(blankWord);
                        view.render(wordContainer, template);

                        if (state.currentBlankWord === state.currentWord) {
                            state._wordCount++;
                            newWord();
                        }
                    }
                }
            }
        });
    }

    const newGame = () => {
        const button = document.querySelector(domSelector.button);
        button.addEventListener('click', () => {
            init();
        });
    }


    const bootstrap = () => {
        init();
        guess();
        newGame();
    }

    return {
        bootstrap
    }

})(View, Model);

Controller.bootstrap();