function inverse (binaryNumber) {
    let result = [];
    for (let i = 0; i <= binaryNumber.length - 1; i++) {
        if (binaryNumber.charAt(i) === "1") {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    console.log(result.join(""));
}

inverse("1110");
inverse("101011");
inverse('1111');