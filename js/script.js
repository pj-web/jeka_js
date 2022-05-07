// Задача №1. Вывести в консоль от 1 до 5 всеми способоми
        // num = 1;
        // while (num <= 5) {
        //     console.log(num);
        //     num++;
        // }

        // let num = 1;
        // while (num <= 5) console.log(num++);

        // for (let num = 1; num <=5; num++) {
        //     console.log(num);
        // }

        // Задача №2. Последний результат 0. Верно? (Ответ: нет)
        // num = 8;
        // while (num) {
        //     console.log(num);
        //     num--;
        // }

        // Задача №3. Переписать на while
        // num = 0;
        // while (num < 3) {
        //     console.log('Число: ' +  num);
        //     num++;
        // }
        
        // Задача №4. Прекратить работу цикла №1 когда size равна 1
        // for (let num = 0; num < 2; num++); {
        //     for (let size = 0; size < 3; size++) {
        //         console.log(size);
        //         if (size == 1) break;
        //     }
        // }
        // Задача №1. Кто попадет в консоль первым?
        // function showName() {
        //     console.log('Вася!');
        // }
        // setTimeout(showName, 0);
        // console.log('Коля!'); // Ответ: Коля

        // Teма "Объекты"

        // Задача №2 (Что будет в консоли) (мой ответ 'Значение свойства' - правильно)
        // let userInfo = {
        //     name: "Вася",
        //     age: 30,
        //     "58": 'Значение свойства'
        // }
        // console.log(userInfo[58]);

        // Задача №3 (Что будет в консоли?) (мой ответ: 45 - правильно)
        // let userInfo = {
        //     name: "Вася",
        //     age: 30,
        // }
        // let user = userInfo;
        // user.age = 45;

        // console.log(userInfo.age);
        
    // Задача №4 (Что будет в консоли?) (мой ответ: Вася - правильно)
    // let userInfo = {
    //     name: "Вася",
    //     age: 30,
    //     showInfo() {
    //         console.log(`${this.name}`);
    //     }
    // }
    // let user = userInfo;
    // userInfo = null;
    // user.showInfo();
        
    // Задача №5 (Что будет в консоли?) (мой ответ: Вася 
    //                                              30 - правильно)
    // let userInfo = {
    //     name: "Вася",
    //     age: 30,
    // }
    // for (const key in userInfo) {
    //     const value = userInfo[key];
    //     console.log(value);
    // }
    // Задача №6 (Что будет в консоли?) (мой ответ: Uzhhorod - правильно)
    // let userInfo = {
    //     name: "Вася",
    //     age: 30,
    //     address: {
    //         city: "Uzhhorod"
    //     }
    // }
    // for (const key in userInfo.address) {
    //     console.log(userInfo.address[key]);
    // }
    
    // Задача №7 (Верна ли запись?) (мой ответ: нет, нужны квадратные скобки - правильно)
    // const userInfo = {
    //     name: "Вася",
    //     age: 30,
    //     "Likes js": true
    // }
    // console.log(userInfo["Likes js"]);

    // Задача №8
    // let userInfo = {
    //     name: "Вася",
    //     age: 30,
    // }
    
    // userInfo.name = "Lena";
    // delete userInfo.name;
    
    // console.log(userInfo);
    
    // 13.1 Получить верное значение округления

// Задача №15.2
// let users = ['Ваня', 'Иштван'];
// users.push('Оля');
// users.splice(1, 1, 'Петя');
// let firstElement = users.shift();
// users.unshift('Маша', 'Паша');
// console.log(users);
// console.log(firstElement);

// Задача №15.3
// let arr = ['Ваня', 'Иштван', 'Оля'];
// let elem = arr.splice(1, 1);
// console.log(elem);
// console.log(arr);

// Задача №15.4 Сделать из строки массив
// let str = 'Ваня,Иштван,Оля';
// let arr = str.split(',');
// console.log(arr);

// Задача №15.5
// Чему равен previousValue в начале работы метода
// let arr = [9, 2, 8,];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
//     console.log(previousValue);
// });

// Задача №16.1
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
const element = document.querySelector('#data-say-hi');
console.log(element);


