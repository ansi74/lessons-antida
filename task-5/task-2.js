var weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getDay() {
  var date = new Date();
  console.log(date);
  var day = date.getDay();
  return weekdays[day] || 'Strange day';
}
var counter = function iife() {
  var currentCount = 0;
  return function() {
    return currentCount++;
  };
}();
function Date() {
    this.getDay = function () {
        //var currentDate = new Date();
        var currentDay = 5;
        return   (counter() % 2 === 0) ? currentDay : 11;
    };
}

//Не изменяя код выше сделать так, чтобы иногда он мог возвращать Strange day.
//Пример работы:
console.log(getDay());
console.log(getDay()); 
console.log(getDay()); 
