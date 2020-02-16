function plus(x, y) {

    if ((isNaN(x) || isNaN(y))) {
        console.log(NaN);
    } else {
        let rez = x + y;
        writeInDocument(rez);
    }
}

function minus(x, y) {

    if ((isNaN(x) || isNaN(y))) {
        console.log(NaN);
    } else {
        let rez = x - y;
        writeInDocument(rez);
    }
}

function mnog(x, y) {

    if ((isNaN(x) || isNaN(y))) {
        console.log(NaN);
    } else {
        let rez = x * y;
        writeInDocument(rez);

    }
}

function deli(x, y) {

    if ((isNaN(x) || isNaN(y))) {
        console.log(NaN);
    } else {
        if (y === 0) {
            alert('на ноль делить нельзя');
        } else {
            let rez = x / y;
            writeInDocument(rez);
        }
    }
}


function writeInDocument(text) {
    document.getElementById('result').innerHTML = text;
}
