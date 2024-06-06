// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
var music = [
    'pop',
    'rock',
    'rap',
    'disco',
    'dance',
    'country',
    'classical music',
    'jazz',
    'hip hop',
    'rock-and-roll'
];
console.log(music[0]);
console.log(music[1]);
console.log(music[2]);
console.log(music[3]);
console.log(music[4]);
console.log(music[5]);
console.log(music[6]);
console.log(music[7]);
console.log(music[8]);
console.log(music[9]);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
var Books = /** @class */ (function () {
    function Books(title, pageCount, genre) {
        this.title = title;
        this.pageCount = pageCount;
        this.genre = genre;
        return { title: title, pageCount: pageCount, genre: genre };
    }
    return Books;
}());
var book1 = new Books('Go where it\'s scary. That is where you will find strength', 382, 'Self development');
var book2 = new Books('Develop your brain', 536, 'Self development');
var book3 = new Books('The monk who sold his Ferrari', 254, 'Self development');
console.log(book1, book2, book3);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
var book1_1 = {
    title: 'Go where it\'s scary. That is where you will find strength',
    pageCount: 382,
    genre: 'Self development',
    authors: [
        {
            name: 'Jim Lawless',
            age: 57
        },
        {
            name: 'Jim Jim',
            age: 60
        }
    ]
};
var book2_2 = {
    title: 'Develop your brain',
    pageCount: 536,
    genre: 'Self development',
    authors: [
        {
            name: 'Joe Dispenza',
            age: 62
        },
        {
            name: 'Dispenza Dispenza',
            age: 57
        }
    ]
};
var book3_3 = {
    title: 'The monk who sold his Ferrari',
    pageCount: 254,
    genre: 'Self development',
    authors: [
        {
            name: 'Robin Sharma',
            age: 59
        },
        {
            name: 'Robin Robin',
            age: 53
        }
    ]
};
console.log(book1_1, book2_2, book3_3);
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
var users = [
    {
        name: 'Nadia',
        username: 'userNadia',
        password: 'passwordNadia123'
    },
    {
        name: 'Anna',
        username: 'userAnna',
        password: 'passwordAnna123'
    },
    {
        name: 'Sophia',
        username: 'userSophia',
        password: 'passwordSophia123'
    },
    {
        name: 'Emily',
        username: 'userEmily',
        password: 'passwordEmily123'
    },
    {
        name: 'Linda',
        username: 'userLinda',
        password: 'passwordLinda123'
    },
    {
        name: 'Sergey',
        username: 'userSergey',
        password: 'passwordSergey123'
    },
    {
        name: 'Anton',
        username: 'userAnton',
        password: 'passwordAnton123'
    },
    {
        name: 'Nick',
        username: 'userNick',
        password: 'passwordNick123'
    },
    {
        name: 'Jack',
        username: 'userJack',
        password: 'passwordJack123'
    },
    {
        name: 'Harry',
        username: 'userHarry',
        password: 'passwordHarry123'
    }
];
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
// // - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
var weather = [
    {
        weekday: 'Monday',
        morning: 11,
        day: 20,
        evening: 16
    },
    {
        weekday: 'Tuesday',
        morning: 10,
        day: 25,
        evening: 18
    },
    {
        weekday: 'Wednesday',
        morning: 16,
        day: 27,
        evening: 19
    },
    {
        weekday: 'Thursday',
        morning: 17,
        day: 28,
        evening: 15
    },
    {
        weekday: 'Friday',
        morning: 19,
        day: 29,
        evening: 20
    },
    {
        weekday: 'Saturday',
        morning: 17,
        day: 24,
        evening: 16
    },
    {
        weekday: 'Sunday',
        morning: 14,
        day: 23,
        evening: 13
    }
];
console.log(weather);
// // Логічні розгалуження:
// //     - Є змінна х, якій ви надаєте довільне числове значення.
// //     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
function stringX(x) {
    if (x !== 0) {
        var a = 'Вірно';
        console.log(a);
    }
    else {
        var b = 'Невірно';
        console.log(b);
    }
    return;
}
stringX(0);
// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
function timeCheck(time) {
    if (time > 0 && time <= 15) {
        var timeOne = 'першу частину години';
        console.log(timeOne);
    }
    else if (time >= 16 && time <= 30) {
        var timeTwo = 'другу частину години';
        console.log(timeTwo);
    }
    else if (time >= 31 && time <= 45) {
        var timeThree = 'третю частину години';
        console.log(timeThree);
    }
    else if (time >= 46 && time <= 59) {
        var timeFour = 'четверту частину години';
        console.log(timeFour);
    }
    return;
}
timeCheck(30);
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
function dayCheck(day) {
    if (day > 1 && day <= 10) {
        var dayOne = 'першу';
        console.log(dayOne);
    }
    else if (day >= 11 && day <= 20) {
        var dayTwo = 'другу';
        console.log(dayTwo);
    }
    else if (day >= 21 && day <= 31) {
        var dayThree = 'третю';
        console.log(dayThree);
    }
    return;
}
dayCheck(15);
// // - Скласти розклад на тиждень за домопоги switch.
// //     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
var schedule = +prompt('Keep the serial number of the day of the week');
switch (schedule) {
    case 1:
        var one = 'Monday';
        console.log(one);
        break;
    case 2:
        var two = 'Tuesday';
        console.log(two);
        break;
    case 3:
        var three = 'Wednesday';
        console.log(three);
        break;
    case 4:
        var four = 'Thursday';
        console.log(four);
        break;
    case 5:
        var five = 'Friday';
        console.log(five);
        break;
    case 6:
        var six = 'Saturday';
        console.log(six);
        break;
    case 7:
        var seven = 'Sunday';
        console.log(seven);
        break;
    default:
        var def = '???';
        console.log(def);
}
// // - Користувач вводить або має два числа.
// //     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.
// // варіант 1 рішення через ternary
var number1_1 = +prompt('Enter a number 1');
var number1_2 = +prompt('Enter a number 2');
var number_ = number1_1 >= number1_2 ? number1_1 : number1_2;
console.log(number_);
// // варіант 2 рішення через if
function num(number2_1, number2_2) {
    if (number2_1 > number2_2) {
        console.log(number2_1);
    }
    else if (number2_1 < number2_2) {
        console.log(number2_2);
    }
    else if (number2_1 === number2_2) {
        console.log(number2_1);
    }
    return number2_1 | number2_2;
}
var number2_1 = +prompt('Enter a number 1');
var number2_2 = +prompt('Enter a number 2');
num(number2_1, number2_2);
// // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// //     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
// // варіант рішення 1
var xx = false;
if (!xx) {
    console.log('default');
}
// // варіант рішення 2
var xxx = false;
xxx = xxx || 'default';
console.log(xxx);
// // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// //     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
var Course = /** @class */ (function () {
    function Course(title, monthDuration) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
    Course.prototype.checkDuration = function () {
        if (this.monthDuration >= 5) {
            console.log('Супер');
        }
        else {
            console.log('Погано');
        }
    };
    return Course;
}());
var coursesAndDurationArray = [
    new Course('JavaScript Complex', 5),
    new Course('Java Complex', 6),
    new Course('Python Complex', 6),
    new Course('QA Complex', 4),
    new Course('FullStack', 7),
    new Course('Frontend', 4)
];
coursesAndDurationArray.forEach(function (course) { return course.checkDuration(); });
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration >= 5){
//     console.log('Супер');
// } else {
//     console.log('Погано')
// }
// if (coursesAndDurationArray[1].monthDuration >= 5){
//     console.log('Супер');
// } else {
//     console.log('Погано')
// }
// if (coursesAndDurationArray[2].monthDuration >= 5){
//     console.log('Супер');
// } else {
//     console.log('Погано')
// }
// if (coursesAndDurationArray[3].monthDuration >= 5){
//     console.log('Супер');
// } else {
//     console.log('Погано')
// }
// if (coursesAndDurationArray[4].monthDuration >= 5){
//     console.log('Супер');
// } else {
//     console.log('Погано')
// }
// if (coursesAndDurationArray[5].monthDuration >= 5){
//     console.log('Супер');
// } else {
//     console.log('Погано')
// }
