function isDivisible(n, x, y) {
    if (n / x && n / y) {
        return true;
    } else {
        return false
    }
    ;
}

let rez = isDivisible(3, 4, 1);
console.log(rez);

