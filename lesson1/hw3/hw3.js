// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
var TextT = /** @class */ (function () {
    function TextT(text) {
        this.text = text;
    }
    TextT.prototype.textFunction = function () {
        for (var i = 0; i < 10; i++) {
            var blocks = text[i];
            var div = document.createElement('div');
            div.innerHTML = JSON.stringify("<p>".concat(blocks, "</p>"));
            document.body.appendChild(div);
        }
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
