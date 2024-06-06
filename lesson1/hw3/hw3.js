// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
var TextT = /** @class */ (function () {
    function TextT(text) {
        this.text = text;
    }
    TextT.prototype.textFunction = function () {
        var div = document.createElement('div');
        div.textContent = this.text;
        document.body.appendChild(div);
        return;
    };
    return TextT;
}());
var text = [
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.'),
    new TextT('Lorem ipsum dolor sit amet.')
];
text.forEach(function (value) { value.textFunction(); });
// text.forEach(value=> {
//     let blocks:TextT=new TextT (value.text)
//     blocks.textFunction()
// });
