alert('Задание № 1');
let Tc = parseInt(prompt('Введите температуру в градусах цельсия: '));
let Tf;
Tf= (9 / 5) * Tc + 32;
alert ('Результат в фаренгейтах: ' + Tf);


alert('Задание № 2');
let name = prompt('Введите имя');
let admin = name;
alert ("admin: " + admin);

alert('Задание № 3');
console.log (10 + 10 + "10"); //Если хотя бы один аргумент является строкой, то второй будет также преобразован к строке!
console.log (10 + "10" + 10); //Если хотя бы один аргумент является строкой, то второй будет также преобразован к строке!
console.log (10 + 10 + +"10"); //скорее все потомучто перед строкой идет два плюса которые приоброзовывают к числу
console.log (10 / -""); //деление на пустую строку = -бесклнечность
console.log (10 / +"2,5");

alert('Задание № 4');
alert('Атрибут async - скрипт js выполняется асинхронно при этом не останавливает обработку HTML страницы и когда скрипт будет загружен то он выполнится ')
alert('Атрибут defer - также скрипт js выполняется асинхронно но есть 2 отличия 1-браузер гарантирует, что относительный порядок скриптов с defer будет сохранён. 2- скрипт с defer сработает, когда весь HTML-документ будет обработан браузером.  ');
