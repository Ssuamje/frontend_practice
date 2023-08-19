let randomAnswer = Math.floor(Math.random() * 100) + 1;
let maxChoices = 0;
let guessCount = 0;

function submitMaxChoices() {
    let maxChoicesInputDom = document.querySelectorAll(".max-choices");
    let maxChoicesInputBox = maxChoicesInputDom[0];
    let maxChoicesSubmitButton = maxChoicesInputDom[1];

    maxChoices = maxChoicesInputBox.value;
    if (maxChoices === "" || isNaN(maxChoices) || maxChoices < 1) {
        alert("자연수를 입력해야합니다.");
        return;
    }
    maxChoicesInputBox.disabled = true;
    maxChoicesSubmitButton.disabled = true;
    document.body.appendChild(createInputBox("guess-input"));
    document.body.appendChild(createButtonElement("정답 입력", "submit-guess", submitGuess));
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

function removeElementFromBodyByClassName(className) {
    document.body.getElementsByClassName(className)[0].remove();
}

function submitGuess() {
    console.log("자스 개같은거");
}