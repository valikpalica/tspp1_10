let arr = [[12, -2, 14, -43, 13], [32, -13, 24, 44, 45], [23, -12, 54, 12, -12], [12, 43, 14, -3, 1], [12, 43, 2, 45, -1]];


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i == j) {
            if (arr[i][j] < 0) {
                arr[i][j] = 0;
            } else {
                arr[i][j] = 1;
            }
        }
    }
}

console.log(arr);
