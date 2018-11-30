var counter20 = { count: 20 };
var counter30 = { count: 30 };
var count2 = {
    valueOf: function () {
        return Infinity;
    },
     toString: function () {
        return Infinity;
    }
    
};
var count3 = {
    valueOf: function () {
        return Infinity;
    },
     toString: function () {
        return Infinity;
    }
    
};
counter20.__proto__ = count2;
counter30.__proto__ = count3;
// Ваш код
// Используя один и тот же объект расширить counter20 и counter30 так, чтобы функции test1 и test2 всегда возвращали true:
var test1 = () => counter20 + counter30 + 2 === counter20 + counter30;
var test2 = Function( `return ${counter20} + ${counter30} - 2 === ${counter20 + counter30}`);
console.log(test1());
console.log(test2());