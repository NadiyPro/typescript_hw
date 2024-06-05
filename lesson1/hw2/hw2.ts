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