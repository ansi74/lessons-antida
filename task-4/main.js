/**
* реализовать функцию-конструктор копилки
* - номер счета - 3-х значное число, начиная с 1
* - если номер меньше трехзначного числа, слева заполняем нулями
* - состояние счета при создании, учитывается в транзакциях
*/
    var n=0;

function Moneybox(total) {
    //Баланстекущий
    this.total =(Number(total)? total : 0 ) ;
    this.transaction = (Number(total)? total : 0 );
    //номер счета
    this.name = (String('000' + ++n).slice(-3));
}
/**
* реализовать получение информации о состоянии копилки
* вывод должен быть в формате
*
* ***
* Номер: 001
* На счету: 150
* Транзакции: 200, -100, 50
* ***
*/
function getMoneyboxInfo(val) {
     return `***\nНомер: - ${val.name}\nНа счету: ${val.total}\nТранзакции:${val.transaction}\n***`;
}
/**
* реализовать добавление в копилку
*/
function addToMoneybox(obj,val) {
    obj.total +=val;
    obj.transaction +=`, ${String(val)}`;
}

/**
* реализовать изъятие из копилки
*/
function takeFromMoneybox(obj, val) {
    obj.total -= val;
    obj.transaction += `, -${String(val)}`;
}

const moneybox1 = new Moneybox(100);
const moneybox2 = new Moneybox;

/**
* пиши код ниже
*/





/**
* пиши код выше
*/
function add100ToMoneybox1(){
    addToMoneybox(moneybox1, 100);
}
function addToMoneybox2(val){
    addToMoneybox(moneybox2, val);
}
function take250FromMoneybox2(){
    takeFromMoneybox(moneybox2, 250);
}
function take10FromMoneybox1(){
    takeFromMoneybox(moneybox1, 10);
}
/**
* используя addToMoneybox и takeFromMoneybox определи следующие функции
*/
add100ToMoneybox1();    // добавит 100 в moneybox1
addToMoneybox2(500);    // добавит 500 в moneybox2
take250FromMoneybox2(); // изымает 250 из moneybox2
take10FromMoneybox1();  // изымает 10 из moneybox1

/**
* используя getMoneyboxInfo определи следующие переменные
*/
moneybox1Info=getMoneyboxInfo(moneybox1);
moneybox2Info=getMoneyboxInfo(moneybox2);
console.log(moneybox1Info);
console.log(moneybox2Info);