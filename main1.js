function second(total) {
    let del = total / 60;
    while (del > 1) {
        del = del - 1;
    }
    console.log(del);
}

second(123);

