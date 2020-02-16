let prom = prompt('number');

function main(x) {
    let a = x<0?'negative':'positiv';
    let b = x%2==0 ||x%3==0 ||x%5==0 ||x%7==0 ||x%11==0 ? 'ne prostoje' : 'prostoje';
    let c = '';
    if(x%2==0){c='devide by 2';}
    else if (x%5==0){c='devide by 5';}
    else if (x%3==0){c='devide by 3';}
    else if (x%6==0){c='devide by 6';}
    else if (x%9==0){c='devide by 9';}
    else {
        c = 'ne delitsa na 2 5 3 6 9'
    }

    console.log(a,' ',b,' ',c);
}

main(prom);
