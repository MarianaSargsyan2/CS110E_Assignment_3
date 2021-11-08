/*Create a function that takes a number as its argument and returns true if a
number is a prime number and false otherwise. Hint: A number is a prime
number when it is divisible only by one and itself. If a number is not divisible
to any number starting 2 to the SQRT of itself, then that number is a prime
number.*/

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

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(17));
console.log(isPrime(15));
console.log(isPrime(-90));