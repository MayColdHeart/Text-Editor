

function heading(level) {
    document.execCommand('formatBlock', false, level);
}

function undo() {
    document.execCommand('undo');
}

function redo() {
    document.execCommand('redo');
}

function bold() {
    document.execCommand('bold');
}

function italic() {
    document.execCommand('italic');
}

function underline() {
    document.execCommand('underline');
}

function strikethrough() {
    document.execCommand('strikeThrough');
}

function subscript() {
    document.execCommand('subscript');
}

function superscript() {
    document.execCommand('superscript');
}

function fontSize(size) {
    document.execCommand('fontSize', false, size);
}

function changeTextColor() {
    let color = document.getElementById('colorTextPick').value;
    document.execCommand('foreColor', false, color);
}

function changeBgColor() {
    let color = document.getElementById('bgColorPick').value;
    document.execCommand('hiliteColor', false, color);
}

function changeFont(font) {
    document.execCommand('fontName', false, font);
}

function alignLeft() {
    document.execCommand('justifyLeft');
}

function alignCenter() {
    document.execCommand('justifyCenter');
}

function alignRight() {
    document.execCommand('justifyRight');
}

function alignJustify() {
    document.execCommand('justifyFull');
}

function outdent() {
    document.execCommand('outdent');
}

function indent() {
    document.execCommand('indent');
}

function orderedList() {
    document.execCommand('insertOrderedList');
}

function unorderedList() {
    document.execCommand('insertUnorderedList');
}

function insertImageUrl() {
    let url = prompt("Insira a URL da imagem:");
    if (url) document.execCommand('insertImage', false, url);
}
