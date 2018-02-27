// 5. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

'use strict';

function addition ( x, y ) {

    return x + y;
}
function difference ( x, y ) {

    return x - y;
}
function division ( x, y ) {

    if (y = 0){
        alert('Делить на ноль нельзя');
    } else if((y > 0) || (y < 0)){
        return x / y;
    }
}

function multiplication( x, y ) {

    return x * y;
}
