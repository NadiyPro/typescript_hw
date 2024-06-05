// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let music:string[] = [
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
]
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
class Books {
    constructor(public title:string, public pageCount:number, public genre:string) {
        return {title,pageCount,genre}
    }
}

let book1:Books=new Books (
    'Go where it\'s scary. That is where you will find strength',
     382,
    'Self development'
)

let book2:Books=new Books (
     'Develop your brain',
    536,
    'Self development'
)

let book3:Books=new Books (
    'The monk who sold his Ferrari',
    254,
    'Self development'
)
console.log(book1,book2,book3);

// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

 let book1_1:{title: string, pageCount: number, genre: string, authors: {name: string, age: number}[]}= {
    title: 'Go where it\'s scary. That is where you will find strength',
    pageCount: 382,
    genre: 'Self development',
    authors:[
        {
            name: 'Jim Lawless',
            age: 57
        },
        {
            name: 'Jim Jim',
            age: 60
        }
    ]
}
let book2_2:{title: string, pageCount: number, genre: string, authors: {name: string, age: number}[]} = {
    title: 'Develop your brain',
    pageCount: 536,
    genre: 'Self development',
    authors:[
        {
            name: 'Joe Dispenza',
            age: 62
        },
        {
            name: 'Dispenza Dispenza',
            age: 57
        }
    ]
}
let book3_3:{title: string, pageCount: number, genre: string, authors: {name: string, age: number}[]} = {
    title: 'The monk who sold his Ferrari',
    pageCount: 254,
    genre: 'Self development',
    authors:[
        {
            name: 'Robin Sharma',
            age: 59
        },
        {
            name: 'Robin Robin',
            age: 53
        }
    ]
}
console.log(book1_1,book2_2,book3_3);
// // - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users:{name:string,  username:string,  password:string}[]=[
    {
        name:'Nadia',
        username:'userNadia',
        password:'passwordNadia123'
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
