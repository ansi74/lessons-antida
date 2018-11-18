const readline = require('readline');
var fs = require("fs");
function removeSpace (){
const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Введите название файла...(без расширения):', (answer) => {
		
		var fileName = answer;
		var TIMER;
		console.time(TIMER);
		fs.readFile(fileName + ".txt", "utf8",
				function (error, data) {
					if (error)
						throw 'Ошибка. Файл не существует или не считывается';
					fs.writeFile("converted_" + fileName + ".txt", data.replace(/\s{2,}/g, ' '), function(error){
						if(error) throw 'Ошибка записи'; 
						console.log("Запись файла завершена. Содержимое файла:");
						var data = fs.readFileSync("converted_" + fileName + ".txt", "utf8");
						console.log(data);
					});
				});
		rl.close();
		console.timeEnd(TIMER);
	});
}
 removeSpace ()