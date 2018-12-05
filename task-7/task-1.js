//А) Создайте класс Human в котором есть свойства: 
//name;
//lastName;
//геттер , возвращающий фразу “Hello Name LastName”;
//Сеттер, устанавливающий префикс для геттера выше, например: “Hello”;
//Б) Создайте класс расширяющий класс выше и добавляющий свойство age и метод isAdult
//возвращающий true если возраст указан 18 и больше.
//В) Создайте массив из объектов второго класса, но с различным значениям свойств.
//Создайте от него несколько массивов:
//Только четные
//Только совершеннолетние
//Только имена несовершеннолетних
//
//П.С. Проявите творческий подход, примените все возможности языка из урока. 
//П.П.С. Попробуйте пофантазировать и доработать классы через новые расширения,
// добавить свойства и методы, геттеры, сеттеры.
class Human {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    get fullName() {
        return `господин ${this.name} ${this.lastName}`;
    }
    set fullName(newName) {
        this.name = newName;
    }
    
};

let person = new Human('Петр', 'Иванов');


console.log(person.fullName);
person.fullName = 'Сергей';
console.log(person.fullName);
//-----------------------------
class Man extends Human {
    constructor(age) {
        this.age = age;
    }
    this.isAdult = function() {
        super.isAdult();
        console.log(this.age);
        return (this.age > 18) ? false : true;
    }
}
;
let person1 = new Human('Петр', 'Иванов', 19);
Man.isAdult();