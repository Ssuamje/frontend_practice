let randomAnswer = Math.floor(Math.random() * 100) + 1;
let answerIndicator = document.createElement("p");
answerIndicator.className = "answer-indicator";
let maxChoices = 0;
let guessCount = 0;

console.log("answer = " + randomAnswer);

function submitMaxChoices() {
    let maxChoicesInputDom = document.querySelectorAll(".max-choices");
    let maxChoicesInputBox = maxChoicesInputDom[0];
    let maxChoicesSubmitButton = maxChoicesInputDom[1];
    
    maxChoices = maxChoicesInputBox.value;
    if (!isNaturalNumber(maxChoices)) {
        alert("자연수를 입력해야합니다.");
        return;
    }
    maxChoicesInputBox.disabled = true;
    maxChoicesSubmitButton.disabled = true;
    document.body.appendChild(createInputBox("guess"));
    document.body.appendChild(createButtonElement("정답 입력", "guess", submitGuess));
}

function isNaturalNumber(input) {
    return input !== "" && input == Number.parseInt(input) && input > 0;
}

function createButtonElement(text, className, onclickFunction) {
    let button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    button.onclick = onclickFunction;
    return button;
}

function createInputBox(className) {
    let inputBox = document.createElement("input");
    inputBox.className = className;
    inputBox.type = "text";
    return inputBox;
}

function createText(className, content) {
    let text = document.createElement("h1");
    text.className = className;
    text.textContent = content;
    return text;
}

function submitGuess() {
    guessCount++;
    if (guessCount >= maxChoices) {
        alert("실패! - 기회를 모두 소진하였습니다.");
        location.reload();
        return;
    }
    let guessInputDom = document.querySelectorAll(".guess");
    let guessInputBox = guessInputDom[0];
    let guessSubmitButton = guessInputDom[1];
    console.log(guessInputBox);
    console.log(guessSubmitButton);
    let guess = guessInputBox.value;
    if (!isNaturalNumber(guess)) {
        alert("자연수를 입력해야합니다.");
        return;
    }
    if (guess == randomAnswer) {
        guessInputBox.disabled = true;
        guessSubmitButton.disabled = true;
        document.body.appendChild(createText("success", "정답입니다!"));
        return;
    }
    if (guess < randomAnswer) {
        return ifAbsentElement(answerIndicator, "업!");
    } else {
        return ifAbsentElement(answerIndicator, "다운!");
    }
}

function ifAbsentElement(element, text) {
    if (!document.getElementsByClassName("answer-indicator").length) {
        document.body.appendChild(answerIndicator);
    }
    answerIndicator.textContent = text;
}