function isPrime (number) {
    let prime = true;
    if (number === 0 || number === 1) {
        prime = false;
    } else if (number === 2) {
        prime = true;
    } else if (Math.sqrt(number) < 2) {
        prime = true;
    } else if (number < 0) {
        prime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0){
                prime = false;
            } 
        }
    }
    return prime;
}

function range (num1, num2) {
    let list = [];
    let k = num1;
    while (k <= num2) {
        if (isPrime(k) === true) {
            list.push(k);
        }
        k++;
    } 
    console.log(list);
}

range(2, 20);