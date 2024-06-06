// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
class TextT {
    constructor(public text:string) {
    }
    textFunction ():string{
            let div:HTMLElement = document.createElement('div');
            div.textContent=this.text;
            document.body.appendChild(div)
            return;
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
// text.forEach(value=> {
//     let blocks:TextT=new TextT (value.text)
//     blocks.textFunction()
// });


