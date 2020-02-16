let rez = 12;

let mas = new Array(rez);

for (let i = 0; i < mas.length; i++) {
    mas[i] = Math.floor(Math.random() * 100);
}


function max(a) {
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        if (x < a[i]) {
            x = a[i]

        }

    }
    return x;

}

function min(a) {
    let x = a[0];
    for (let i = 0; i < a.length; i++) {
        if (x > a[i]) {
            x = a[i]

        }

    }
    return x;

}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function seredina(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

function para(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] !== 0) {
            console.log(arr[i]);
        }
    }
}

console.log(mas);
console.log(max(mas) + ' max');
console.log(min(mas) + ' min');
console.log(seredina(mas) + ' seredna');
para(mas);
