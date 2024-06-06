// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

class TextT {
    constructor(public text:string) {
    }
    textFunction ():string{
        for (let i:number=0;i<10;i++){
            let blocks:any = this[i];
            let div:HTMLElement = document.createElement('div');
            div.innerHTML=`<p>${blocks}</p>`
            document.body.appendChild(div)
        } return ;
    }
}
let text:TextT[] = [
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.'),
   new TextT ('Lorem ipsum dolor sit amet.')
];
text.forEach(value=> {value.textFunction()});
