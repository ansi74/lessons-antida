//Написать функцию getUserAvatars, которая получает n пользователей начиная с startsWith
//с GitHub и возвращает массив объектов вида 
//{
//  avatar: string;
//  id: number;
//  username: string;
// }[]
//Пользователи не должны повторяться.
//Пример работы функции:
//console.table(await getUserAvatars(10));
 
function resposeToGithub(x) {
    return  fetch(`https://api.github.com/users?since=${x}`);
}
function moveToArray(arr) {
    let resultArray = [];
    arr.reduce(function (result, val, index) {
        result = {
            avatar: val.avatar_url,
            id: val.id,
            username: val.login
        };
        resultArray.push(result);
    }, {});
    return resultArray;
};


async function getUserAvatars(n) {
    try {
        let json = await resposeToGithub(1).then(response => response.json());
        let resultArray = await moveToArray(json);
        if (n < json.length) {
            resultArray = resultArray.slice(0, n);
        } else {
           let count = Math.ceil(n/json.length);
           for (let i=1; i<count; i++){
              let lastElem = resultArray [resultArray.length - 1];
              let json = await resposeToGithub(lastElem.id).then(response => response.json());
              let tmpArray = await moveToArray(json);
              Array.prototype.push.apply(resultArray,tmpArray);
           }
           resultArray = resultArray.slice(0, n);
        }
        return console.table(resultArray);
    } catch (err) {
        console.log(err);
    }
};
console.table(getUserAvatars(52));