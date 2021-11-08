function reverse (number) {
    let numberStr = String(number);
    let result = [];
    for (let i = 0; i <= numberStr.length - 1; i++) {
        result.unshift(numberStr[i]);
    }
    console.log(result.join(''));
}

reverse(1234);
reverse(346);