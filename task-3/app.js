const scoreList={
    data: [
        {score: 10, name: 'Bob', age: 18},
        {score: 6, name: 'Vasya', age: 11},
        {score: 10, name: 'Petya', age: 18},
        {score: 6, name: 'Berta', age: 22},
        {score: 10, name: 'Vovan', age: 21},
        {score: 6, name: 'Semen', age: 10},
        {score: 10, name: 'Yarik', age: 18},
        {score: 8, name: 'Barbara', age: 21},
        {score: 25, name: 'Olga', age: 22},
        {score: 8, name: 'Bella', age: 23}
    ],
    toString: function () {
        let obj = this.data;
        let result = [];
        for (prop in obj) {
            result[prop] = obj[prop].name + ' - ' + obj[prop].age + ' : ' + obj[prop].score;
        }
        return result;
    }
};
let scoreListData=scoreList.data;
let initialValue = 0;
// сумма очков всех участников
let scoreSumm = scoreListData.reduce(function(summ,current){
        return +summ + +current.score;
    }, initialValue);
//массив с участниками старше 18
let adultsPeople=scoreListData.filter(function(elem){
   return elem.age > 18;
});
//фильтруем имена на B
let sortByLetter=scoreListData.filter(function(elem){
   return elem.name.indexOf('B')> -1;
});
//суммируем очки участников одного возраста
function groutScoreByAge() {
    let resultArray = [];
    scoreListData.reduce(function (result, val, index) {
        if (!result[val.age]) {
            result[val.age] = {
                score: 0,
                age: val.age
            };
            resultArray.push(result[val.age]);
        }        
        result[val.age].score += val.age;
        return result;
    }, {});
    return resultArray;
}

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Cумма всех очков ${scoreSumm}\n`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`Массив с участниками старше 18`);
console.table(adultsPeople);
console.log(`Массив с участниками с именем, начинающимся на B`);
console.table(sortByLetter);
console.log(`массив со строками вида: "Bob - 18: 10"`);
console.table(scoreList.toString());
console.log(`Cуммы очков участников, сгруппированных по возрасту`);
console.table(groutScoreByAge());


