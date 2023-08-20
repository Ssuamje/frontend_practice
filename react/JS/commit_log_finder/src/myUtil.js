export function escapeSpecialCharacters(text) {
    let specialChars = "!@#$^&%*()+=-[]\\';,./{}|\":<>?";
    let escapeChar = '\\';

    let newText = '';
    for (let i = 0; i < text.length; i++) {
        if (specialChars.indexOf(text[i]) !== -1) {
            newText += escapeChar + text[i];
        } else {
            newText += text[i];
        }
    }

    return newText;
}