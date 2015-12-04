/**
 * criar um botao
 * animaçao
 * infinita
 * criar dinamicamente com javascript
 */

var div = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
var animate = document.getElementById('animate');


animate.addEventListener('click', function () {
  setInterval(function () {
    var colors = ['#647a14','#b21ad4','#d1c4e6'];
    var colorsFormula = Math.floor(Math.random() * colors.length);
    var randonColor = colors[colorsFormula];
    div.setAttribute('style',
      'background-color:'+randonColor+';'+
      'margin-top:10px;'+
      'width:50px;'+
      'height:50px;'
    );
    body.appendChild(div);
  }, 1000 /*=1 segundo*/);
});
