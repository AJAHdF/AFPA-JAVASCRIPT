

// desactiver un bouton
function disableElement() {
  document.getElementById("btn01").disabled = true;
}

// activer un bouton
function enabledElement() {
  document.getElementById("btn01").disabled= false;
}

function myFunctionBtnName() {
  var x = document.getElementById("btn1").name;
  document.getElementById("demo2").innerHTML = x;
}


// création d'un obet et affichage
const person = {
  name: "AlAIN",
  age: 56,
  city: "Dunkerque",
  language:"Fr",
    set lang(value){
    this.language= value;
  }
};
document.getElementById("demo3").innerHTML = person.name + ", " + person.age + ", " + person.city + ", " + person.language;

//affichage en boucle 
let txt="";
for(let x in person){
txt +=person[x] + " ";
};
document.getElementById("demo4").innerHTML = txt;
// const myArray = Object.values(person); les valeurs de et sont mis en tableau
// document.getElementById("demo").innerHTML = myArray[0]; le 1er element du tableau est AlAIN
// document.getElementById("demo").innerHTML = myArray[1] ==> 56
person.lang="English";
document.getElementById("demo5").innerHTML = "Valeur de language modifiée par méthode lang de l'objet (set) " + person.language;


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create a Person object
const myFather = new Person("JACQ", "Yves", 55, "blue");
const myMother = new Person("REES", "Nelly", 55, "noir");

// Display age
document.getElementById("demo6").innerHTML = "My father is " + myFather.firstName +" "+ myFather.age + "."; 
document.getElementById("demo6b").innerHTML = "My mother is " + myMother.firstName +" "+ myMother.age + ".";   
// To add a new property to a constructor, you must add it to the constructor function
// exemple this.nationality ="English" dans la fonction Person pour utiliser bas myFather.nationality

// Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:     
    // Date objects inherit from Date.prototype
    // Array objects inherit from Array.prototype
    // Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:
// Date objects, Array objects, and Person objects inherit from Object.prototype.
// The prototype property allows you to add new methods to objects constructors

// Create an Array
// les operations d'assignation
// =   	x = y   équivaut à	x = y
// +=  	x += y  équivaut à  x = x + y
// -= 	x -= y 	équivaut à  x = x - y
// *= 	x *= y 	équivaut à  x = x * y
// /= 	x /= y 	équivaut à  x = x / y
// %= 	x %= y 	équivaut à  x = x % y
// **= 	x **= y équivaut à  x = x ** y



const letters = ["a","b","c","d", "e","f"];
// List all Elements
let text = "";
for (const x of letters) {
  text += x + "<br>";
  console.log(x);
  console.log(text);
}
document.getElementById("demo7").innerHTML = text;

// Create a Set
const lettres = new Set(["a","b","c"]);
lettres.add ("Z"); //ajout
lettres.add ("Y");
lettres.add ("X");
lettres.add ("a"); //ajout
lettres.add ("b"); // en dble non ajouté
lettres.add ("c");
lettres.add ("d");
// List all Elements avec for each de la collection
let texte = "";
lettres.forEach (function(value){
  texte += value + "<br>";
});
document.getElementById("demo8").innerHTML = texte;
console.log(lettres);
console.log( (typeof lettres));

// Home Made Iterable fbrication d'une suite arithmetique
function myNumbers() {
  let n = 0; // départ de 0
  return {
    next: function() {
      n += 10; // inceremet de 10 en 10
      return {value:n, done:false};
    }
  };
};

// Create Iterable
const n = myNumbers();
n.next(); // 10
n.next(); // 20
n.next(); // 30
n.next(); 
n.next(); 
n.next(); 
n.next(); //70 
console.log(myNumbers);
document.getElementById("demo9").innerHTML = n.next().value;