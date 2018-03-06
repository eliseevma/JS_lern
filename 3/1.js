/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (можно без оптимизаций).*/
'use strict';

let i=2;
while (i<=100){
    if (isPrimeNumber(i)){
        document.write(i + " ");
        console.log (i);
    }
    i++;

}
/**
 * Функция проверяет является ли число простым.
 * @param {int} number Число, которое проверям.
 * @returns {boolean} Вернет true, если число простое, иначе false.
 */
function isPrimeNumber(number) {
    if (number < 2){
        return false;
    }

    for (let j = 2; j < number; j++){
        if (number % j === 0){
            return false;
        }
    }
    return true;
}
