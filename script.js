// task1
let sum = 0;
let amount = 0;
function myFunction() {
    for(let i = 1; i <= 99; i++) {
        if (i % 2 == 0) {
            sum++;
            amount+=i;
        }
    }
    console.log("сумма четных чисел: " + sum);
    console.log("количество четных чисел: " + amount);
}
myFunction();
 
 
// task2
function isPrime() {
    let num = 3;
    if (num > 1) {
        console.log(true);
    } else {
        console.log(false);
    }
}
 
isPrime(3);
 
// task3
function getSqrtBySequentialSelection(n) {
    console.log(Math.sqrt(n));
}
let result = getSqrtBySequentialSelection (900);


// Метод бинарного поиска
function getSqrtByBinarySearch(number) {
    let response = number;
 
    while (response * response > number) {
        response /= 2;
    }
    while (response * response < number) {
        response++;
    }
    return Math.round(response);
};
 
console.log(getSqrtOfNumberByBinarySearch(9));


// task4
function  getFactorial(n) {
    let result = 1;
    while(n) {
        result *= n--;
    }
    return result;
}
 
console.log(getFactorial(4));
 
// task5
let num = 2008;
let digits = ("" + num).split("");
let sumNumber = 0;
for (let i = 0; i < digits.length; i++) {
    sumNumber += Number(digits[i]);
}
console.log(sumNumber);

