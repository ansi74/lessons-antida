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
    constructor(name, lastName, age) {
        super(name, lastName);
        this.age = age;
    }
    isAdult() {
        console.log(this.age > 18) ? false : true;
    }

}

let person1 = new Man('Vasya', 'Petrov', 19);
person1.isAdult();
let men = [
    new Man('Mihail', 'Ivanov', 17),
    new Man('Kirill', 'Smirnov', 21),
    new Man('Yana', 'Semenov', 14),
    new Man('Victor', 'Vasilyev', 16),
    new Man('Olga', 'Petrova', 22),
    new Man('Petr', 'Gazizov', 33)
];
let adultMen = men.filter((item) => item.age > 18);
console.table(adultMen);
let adultMenNames = [];
men.forEach((item) => {
    if (item.age > 18)
        adultMenNames.push(item.name);
});
console.table(adultMenNames);
let adultMenOdd = men.filter((item, index) => index % 2 === 0);
console.table(adultMenOdd);