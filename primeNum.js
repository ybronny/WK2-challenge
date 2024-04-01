function primeNum(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function getPrimeNumbers(array) {
    const primeNumbers = [];
    for (let num of array) {
        if (primeNum(num)) {
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}

const Nums = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
const primeNumbers = getPrimeNumbers(Nums)

console.log(primeNumbers)