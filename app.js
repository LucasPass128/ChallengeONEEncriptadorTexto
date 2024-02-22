// Variables globales
let text = document.getElementById('text');
let texttransform_area = document.getElementById('texttransform_area');
let emptymessage = document.getElementById('emptymessage');
let texttransform = document.getElementById('texttransform');
let areaClearX = document.getElementById('areaClearX');
let textAreaClear = false;
let warning = document.getElementById('warning');

// Funciones relacionadas con la encriptación y desencriptación
const encriptar = () => {
    const txt = text.value;
    const resp = noCharacters(txt);

    if (resp && txt.length > 0) {
        let allTxt = '';
        const arrayTxt = txt.split('');
        arrayTxt.forEach(t => {
            switch (t) {
                case 'e':
                    allTxt += 'enter';
                    break;
                case 'i':
                    allTxt += 'imes';
                    break;
                case 'a':
                    allTxt += 'ai';
                    break;
                case 'o':
                    allTxt += 'ober';
                    break;
                case 'u':
                    allTxt += 'ufat';
                    break;
                default:
                    allTxt += t;
                    break;
            }
        });
        deactive(true);
        texttransform.innerText = allTxt;
    } else {
        displayWarning();
    }
};

const desencriptar = () => {
    const txt = text.value;
    const resp = noCharacters(txt);

    if (resp && txt.length > 0) {
        let allTxt = '';
        const arrayTxt = txt.split('');
        for (let i = 0; i < arrayTxt.length; i++) {
            switch (arrayTxt[i]) {
                case 'e':
                    if (
                        arrayTxt[i + 1] === 'n' &&
                        arrayTxt[i + 2] === 't' &&
                        arrayTxt[i + 3] === 'e' &&
                        arrayTxt[i + 4] === 'r'
                    ) {
                        i += 4;
                    }
                    allTxt += 'e';
                    break;
                case 'i':
                    if (
                        arrayTxt[i + 1] === 'm' &&
                        arrayTxt[i + 2] === 'e' &&
                        arrayTxt[i + 3] === 's'
                    ) {
                        i += 3;
                    }
                    allTxt += 'i';
                    break;
                case 'a':
                    if (arrayTxt[i + 1] === 'i') {
                        i += 1;
                    }
                    allTxt += 'a';
                    break;
                case 'o':
                    if (
                        arrayTxt[i + 1] === 'b' &&
                        arrayTxt[i + 2] === 'e' &&
                        arrayTxt[i + 3] === 'r'
                    ) {
                        i += 3;
                    }
                    allTxt += 'o';
                    break;
                case 'u':
                    if (
                        arrayTxt[i + 1] === 'f' &&
                        arrayTxt[i + 2] === 'a' &&
                        arrayTxt[i + 3] === 't'
                    ) {
                        i += 3;
                    }
                    allTxt += 'u';
                    break;
                default:
                    allTxt += arrayTxt[i];
                    break;
            }
        }
        deactive(true);
        texttransform.innerText = allTxt;
    } else {
        displayWarning();
    }
};

// Funciones auxiliares
const noCharacters = (t) => {
    let re = /[A-Z]/;
    const mayusculas = re.test(t);
    re = /[á-źà-ùÁ-ŹÀ-Ù]/;
    const tildes = re.test(t);
    re = /[0-9]/;
    const numero = re.test(t);
    return !(mayusculas || tildes || numero);
};

const deactive = (d) => {
    if (d) {
        texttransform_area.classList.add('active');
        emptymessage.classList.add('deactive');
    } else {
        texttransform_area.classList.remove('active');
        emptymessage.classList.remove('deactive');
    }
};

const displayWarning = () => {
    warning.classList.add('warning-active');
};

const closeWarning = () => {
    warning.classList.remove('warning-active');
};

const heightArea = () => {
    text.style.cssText = `height: ${text.scrollHeight}px`;
    if (!textAreaClear && text.value.length > 0) {
        textAreaClear = true;
        areaClearX.classList.add('areaClearX-active');
    }
};

const clipboardRun = () => {
    navigator.clipboard.writeText(texttransform.innerText);
};

const closeX = () => {
    deactive(false);
    texttransform.innerText = '';
};

const areaClear = () => {
    textAreaClear = false;
    areaClearX.classList.remove('areaClearX-active');
    text.value = '';
    text.focus();
};