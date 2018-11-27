/*
Написать функцию-конструктор, создающую объект прямоугольника. Объект должен иметь:
Размеры сторон.
Единицы измерения (например “см.”).
Метод, возвращающий информацию о прямоугольнике в формате “ширина: 100 см., высота: 100 см.”.

Написать функции:
getArea - расчет площади прямоугольника 
getPerimetr - расчет периметра прямоугольника

Создать объект прямоугольника и вывести в консоль:
Информацию о нем
Площадь и периметр, используя getArea и getPerimetr (использовать call, apply или bind).
 */

const Rectangle = function(width,height,units){
    this.width=width,
    this.height= height;
    this.units= units;
    this.info=function(){
        return `ширина - ${this.width} ${this.units} , высота - ${this.height} ${this.units}`;
    };
    
};
function getArea(val){
    return `площадь - ${val.width * val.height} ${val.units} `;
};
function getPerimetr(val){
    return `периметр - ${(val.width + val.height) * 2} ${val.units} `;
}
var obj={
    units:'см.'
};

let rectangle10x20=new Rectangle(10,20,'cм.');
console.log(rectangle10x20.info());
console.log(getArea(rectangle10x20));
console.log(getPerimetr(rectangle10x20));