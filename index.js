var x = 6;
//incrementation de 1
var sum = ++x;
console.log(sum);
// incrementation de 1
var sum = ++x;
console.log(sum);
// decremementation de 1-
var sum = --x;
console.log(sum);
// reste d'une division
var y = 13;
var result = y%x;
console.log(result);
// négation unaire
console.log(-result);
// plus unaire converti la chaine en valeur si c'est possible
var result =  "16"
console.log(+result);
var result =  true
console.log(+result);
var result =  false
console.log(+result);
var result =  "ADAM"
console.log(+result);
// puissance d'un nombre
var x = 3;
var y = 2;
console.log( x ** y);
console.log( x ** -y);
// operateurs binaires ET
var a =0;
var b= 1;
console.log(a&b);
var a =1;
var b= 1;
console.log(a|b);
// operateurs binaires OU
var a =0;
var b= 1;
console.log(a^b);
var a =1;
var b= 1;
console.log(a^b);


var x = 5;
var y = 3;
var z = 4;
var result = z*(x+y);
console.log(result);
//operateur NOT
var a = 0;
console.log(~a);
var b = 1;
console.log(~b);

let button = document.querySelector('button');

button.onclick = function(){
let name = prompt('Quel votre nom');
alert('Hello ' + name + ', sympa de vous voir !');
};
let sgl = 'Guillemet simple.';
let dbl = "Guillemets doubles.";
sgl;
dbl;
console.log(sgl);
console.log(dbl);
console.log(sgl+dbl);
let string = 'La révolution ne sera pas télévisée.';
string;
let badString = string;
alert(badString);
let bigmouth = 'Je n\'ai pas eu droit à prendre place...';
console.log(bigmouth);
// Concatenation chaine de caracteres
let one = 'Hello, ';
let two = 'comment allez‑vous ?';
let joined = one + two;
console.log(joined);