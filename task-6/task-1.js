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
//    let resultTable = [], tmpList = {}, idx = 1, counter = 0;
//    tmpList = {
//        avatar: '',
//        id: '',
//        username: ''
//    };
//    let userFromGithub = 

//    while (idx != userFromGithub.length) {
//        tmpList.avatar = userFromGithub.avatar_url;
//        tmpList.id = userFromGithub.id;
//        tmpList.username = userFromGithub.login;
//        resultTable.push(tmpList);
//        tmpList = {};
//        idx++;
//    }
async function getUserAvatars(n) {
    try {
        let resultTable = await fetch('https://api.github.com/users?since=135').then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                                response.status);
                        return;
                    }
                    response.json().then(function (data) {
                        let resultArray = [];
                        data.reduce(function(result, val, index){
                            result = {
                                avatar: val.avatar_url,
                                id: val.id,
                                username: val.login
                            };
                            resultArray.push(result);
                        },{});
                        return console.table(resultArray);
                    });
                }
        ).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
        return  console.log(resultTable);
    } catch (err) {
        console.log(err);
    }
};
console.table(getUserAvatars(10));