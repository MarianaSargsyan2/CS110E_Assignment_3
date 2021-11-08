function reverse (number) {
    let numberStr = String (number);
    let result = [];
    for (let i = 0; i <= numberStr.length - 1; i++) {
        result.unshift(numberStr[i]);
    }
    return Number (result.join(''));
}


function palindrome (number) {
    if (reverse(number) === number) {
        console.log("The number " + number + " is a palindrome.");
    }
    else {
        console.log("The number " + number + " is not a palindrome.")
    }
}

palindrome(1221);
