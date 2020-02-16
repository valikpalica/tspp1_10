let first = 0;
let second = 0;
function plus() {
    getElementBuId();
    if ((isNaN(first) || isNaN(second) != false)) {
        let rez = Number(first) + Number(second);
        console.log(rez);
        writeInDocument(rez);
    }
}

function minus() {
    getElementBuId();
    if ((isNaN(first) && isNaN(second) !== NaN)) {
        let rez = first - second;
        writeInDocument(rez);
    } else {
        console.log(NaN);
    }
}

function mnog() {
    getElementBuId();
    if ((isNaN(first) && isNaN(second) !== NaN)) {
        let rez = first * second;
        writeInDocument(rez);
    } else {
        console.log(NaN);
    }
}

function deli() {
    getElementBuId();
    if ((isNaN(first) && isNaN(second) !== NaN)) {
        let rez = first / second;
        writeInDocument(rez);
    } else {
        console.log(NaN);
    }
}

function getElementBuId() {
    first = Number(document.getElementById("first_element"));
    second = Number(document.getElementById("second_element"));


}

function writeInDocument(text) {
    document.getElementById('result').innerHTML = text;
}
