// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 5) и вернуть полученное значение.

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

function mathOperation(arg1, arg2, operation) {

    switch (operation){
        case "addition":
            console.log(addition(arg1, arg2));
            break;
        case "difference":
            console.log(difference(arg1., arg2));
            break;
        case "division":
            console.log(division(arg1., arg2));
            break;
        case "multiplication":
            console.log(multiplication(arg1., arg2));
            break;

    }


}
mathOperation(5, 3, division);