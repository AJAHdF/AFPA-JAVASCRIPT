// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["Mangues", 600],
  ["oranges", 200]
]);
// pour ajout ou modif
fruits.set("pommes", 600);//ajout
fruits.set("poires", 700);//ajout
fruits.set("oranges", 800); // modification


// pour rechercher 
document.getElementById("demo").innerHTML = fruits.get("apples");
console.log(fruits);
console.log(fruits.size);
// Clear the Map
fruits.clear();
console.log(fruits.size);

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN" 
};
// Change a property
Object.defineProperty(person, "language", {value:"NO"})
document.getElementById("demo2").innerHTML = person.language;
console.log(person);
// Change Property
Object.defineProperty(person, "language", {enumerable:false});
// Display Properties
// Change Property
Object.defineProperty(person, "language", {enumerable:false});
// Display Properties
document.getElementById("demo3").innerHTML = Object.getOwnPropertyNames(person) + ' - ' + Object.keys(person) + ' - ' + Object.values(person);


//gestion des erreurs
function myErreur() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo4").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}

// jsom format proche de javascript
let chaine = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(chaine);
document.getElementById("demo5").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
console.log(obj);

// fonctions fléchées
// Avant 
// hello = function() {
//   return "Hello World!";
// fonction coucou
coucou= () => {
  return "Hello le monde";
} 
document.getElementById("demo6").innerHTML = coucou();
// fonction avec paramètre
hello = (val) => "Hello avec le paramètre==> " + val;  // sans paranthèse hello = val => "Hello " + val;
document.getElementById("demo7").innerHTML = hello("Universe! le paramètre");

// heritage de classes
class Car {
  constructor(brand) {
    this.carname = brand;
      }
  present() {
    return 'I have a ' + this.carname;
  }
}
// model heriste de car
class Model extends Car {
  constructor(brand, mod, ener) {
    super(brand);
    this.model = mod;
    this.energie = ener;
  }
  show() {
    return this.present() + ', it is a ' + this.model + ' fonctionnant au : ' + this.energie;
  }
}
let myCar = new Model("Ford", "Mustang", "Essence");
document.getElementById("demo8").innerHTML = myCar.show();
console.log(myCar);