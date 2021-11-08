function inverse (binaryNumber) {
    let result = [];
    for (let i = 0; i <= binaryNumber.length - 1; i++) {
        if (binaryNumber.charAt(i) === "1") {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    return result.join("");
}

function binarySum (num1, num2) {
    let num1Array = [];
    let num2Array = [];
    for (let i = 0; i <= num1.length - 1; i++) {
        num1Array.push(Number(num1[i]));
    }
    for (let i = 0; i <= num2.length - 1; i++) {
        num2Array.push(Number(num2[i]));
    }
    if(num1Array.length < num2Array.length) {
        for (let i = num1Array.length; i <= num2Array.length - 1; i++){
            num1Array.unshift(0);
        }
    } else if (num2Array.length < num1Array.length) {
        for (let i = num2Array.length; i <= num1Array.length - 1; i++) {
            num2Array.unshift(0);
        }
    }

    let carry = 0;
    let sum = [];
    for (let i = num1Array.length - 1; i >= 0; i--){
        if(num1Array[i] + num2Array[i] === 2) {
            sum[i] = carry;
            carry = 1;
        } else if (num1Array[i] + num2Array[i] + carry === 2) {
            sum[i] = 0;
            carry = 1;
        } else {
            sum[i] = num1Array[i] + num2Array[i] + carry;
            carry = 0;
        }   
    }
    if (num1Array[0] + num2Array[0] + carry >= 2){
        sum.unshift(1);
    }
    return sum.join('');
}

function twoscomplement (number) {
    console.log(binarySum('1', inverse(number)));
}

twoscomplement('10011');