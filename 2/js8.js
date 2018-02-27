// С помощью рекурсии организовать функцию возведения числа в степень.
//     Формат: function power(val, pow), где val – заданное число, pow – степень.

'use strict';

function power(val, pow){
    if(pow !=1){
        return val*power(val,pow -1);// 2* (2, 3)
    }else{
        return val;
    }
}
power(2,4);
