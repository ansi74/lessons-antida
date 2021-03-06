//Используя замыкания написать небольшую консольную игру, которая будет загадывать секретное
//число, а игрок должен будет угадать за отведенное количество попыток, при каждом “угадывании”
//количество попыток сокращается на 1. При неправильном варианте ответа игроку 
//будет выводиться сообщение больше или меньше загаданное число и количество 
//оставшихся попыток. Это должна быть функция куда мы будем передавать аргументы
//        - n и tries (значения по умолчанию 10 и 3), где с помощью n создаётся
//секретное (целое!) число от 1 до n, а tries - это количество попыток, которые
//есть у игрока, чтобы отгадать число.
(function () {
    function findSecret(n, tries) {
        let calcSecret = (n) => {
            return Math.floor(Math.random() * (n - 1 + 1)) + 1;
        };
        let secret = calcSecret(n);
        let currentCount = n;
        return function (answer) {
            let message = (secret < answer) ? `Ваш вариант меньше, осталось попыток - ${currentCount - 1}` :
                    (secret > answer) ? `Ваш вариант больше, осталось попыток - ${currentCount - 1}` :
                    (secret === answer) ? 'Вы угадали !!! поздравляем' : '';
            currentCount--;
            return console.log(message);
        };
    };
    var game1 = new findSecret(10, 3);
    var game2 = new findSecret(5, 3);
    game1(5);
    game2(5);
}());