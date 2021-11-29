let messageElement = document.getElementById("message"); //recuperation de l'elet par son ID
console.log(messageElement);
// ou en utilisant directement l'id de l’élément
console.log(message);

messageElement = "du texte";
// message ne contient plus l'élément HTML ayant pour id message,
// mais il contient désormais
console.log(messageElement);

//Remplacer le contenu textuel d'un élément HTML
messageElement.innerText = "Bonjour !<br>";
//Remplacer le contenu HTML d'un élément HTML
messageElement.innerHTML = "Bonjour !<br>";
function myFunction() {
    var x = document.getElementById("myBtn").innerText;
    document.getElementById("demo").innerHTML = x;  
  }


//   The innerText property returns just the text, without spacing and inner element tags.
// The innerHTML property returns the text, including all spacing and inner element tags.
// The textContent property returns the text with spacing, but without inner element tags
function getInnerText() {
  alert(document.getElementById("demo2").innerText)
}

function getHTML() {
  alert(document.getElementById("demo2").innerHTML)
}

function getTextContent() {
  alert(document.getElementById("demo2").textContent)
}

let divsWithCls = document.querySelectorAll("div.cls"); // la collection 
//Pour parcourir la collection
divsWithCls.forEach( (elt, i) => elt.innerText = "Hello div.cls N°" + i); // affice sur le doc avec indice
divsWithCls.forEach( (elt, i) => {console.log(elt.innerText);}); // affice dans la console avec indice
//ou
for(let elt2 of divsWithCls){
    console.log(elt2); //alternative avec for of collection
}


// fonction confirm qui renvoie un booleen
// let age =parseInt(result);
// let test;
// if (age>= 18){
//   test =confirm("Vous êtes majeur(e)!");
// } else{
//   test =confirm("Vous êtes mineur(e)!");
// }
// console.log(test);

function myFunctionConfirm() {
  var txt;
  var r = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo3").innerHTML = txt;
}

function myFunctionDomain() {
  document.getElementById("demo4").innerHTML = document.domain;
}

function myFunctionClock() {
  document.getElementById("demo5").innerHTML = document.lastModified;
}
function myFunctionTitle() {
  document.getElementById("demo6").innerHTML = "Le titre document est : " + document.title + "<br/>"
  + " l'URL est : = " + document.URL;
}

function myFunctionRewrite() {
  document.open("text/html","replace");
  document.write("<h2>Learning about the HTML DOM is fun!</h2>");
  document.close();
}

function myFunctionOpenWindow() {
  var fenetre = window.open();
  fenetre.document.open();
  fenetre.document.write("<h2>Hello World!</h2>");
  fenetre.document.close();
}
function getElements() {
  var x = document.getElementsByName("x");
  document.getElementById("demo9").innerHTML = x.length;
}

// compter le nb d'élements input  dans le doc
function getElements() {
  var x = document.getElementsByTagName("input");
  document.getElementById("demo10").innerHTML = x.length;
}