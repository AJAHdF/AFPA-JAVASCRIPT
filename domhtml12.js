// // parcourir les evt asysnchrones
// let myVar = setInterval(myTimer, 1000);

// function myTimer(){
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }
// function myStartFunction(){
//  myVar = setInterval(myTimer, 1000);
// }

let id;
let width = 0;
var elem = document.getElementById("myBar");   
var text = document.getElementById("barText");  
// l evement click a été retire du code html afin de ouvoir le controler (voir <> avec Stop Me dans HTML)
var startBtn = document.getElementById("start");
startBtn.addEventListener('click',move);
function move() {
    startBtn.removeEventListener('click', move);
    text.innerText = width+" %";
    id = setInterval(frame, 100);
    function frame() {
      if (width == 100) {
        clearInterval(id);
        width = 0;
        startBtn.addEventListener('click',move);
      } else {
        width++; 
        elem.style.width = width + '%';
        text.innerText = width+" %";
      }
    }
}
// Arrêt de la barre de progession
function stopmove() {
    // console.log(width);
    clearInterval(id);
    startBtn.addEventListener('click',move);
    
}

// gestion couleur de fond d ecran
let myColor;
let myBody = document.body; 
var stopcolorBtn = document.getElementById("stopcolor");
var startcolorBtn = document.getElementById("startcolor");
stopcolorBtn.addEventListener('click',stopColor);
startcolorBtn.addEventListener('click',startColor);
startcolorBtn.disabled= false; 
stopcolorBtn.disabled= true; 
 
function stopColor() {
    myBody.style.backgroundColor="lightblue";
    clearInterval(myColor);
    startcolorBtn.addEventListener('click',startColor);
    startcolorBtn.disabled= false; 
    stopcolorBtn.disabled= true; 
}

function startColor() {
    myColor = setInterval(setColor, 1500);
    stopcolorBtn.addEventListener('click',stopColor);
    startcolorBtn.disabled= true; 
    stopcolorBtn.disabled= false; 
}

function setColor() {
    myBody.style.backgroundColor = myBody.style.backgroundColor == "pink" ? "lightgreen" : "pink";
}

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// });

// promise1.then((value) => {
//   console.log(value);
//   // expected output: "foo"
// });

// console.log(promise1);
// // expected output: [object Promise]




// 'use strict'; 
var comptePromesse = 0;
function testPromise() {
  var thisComptePromesse = ++comptePromesse;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Started (<small>Début du code synchrone</small>)<br/>');

  // on crée une nouvelle promesse :
  var p1 = new Promise(
        // La fonction de résolution est appelée avec la capacité de
        // tenir ou de rompre la promesse
        function(resolve, reject) {
          log.insertAdjacentHTML('beforeend', thisComptePromesse +
              ') Promise started (<small>Début du code asynchrone</small>)<br/>');

          // Voici un exemple simple pour créer un code asynchrone
          window.setTimeout(
            function() {
              // On tient la promesse !
              resolve(thisComptePromesse);
            }, Math.random() * 2000 + 1000);
    });

  // On définit ce qui se passe quand la promesse est tenue
  // et ce qu'on appelle (uniquement) dans ce cas
  // La méthode catch() définit le traitement à effectuer
  // quand la promesse est rompue.
  p1.then(
    // On affiche un message avec la valeur
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promise fulfilled (<small>Fin du code asynchrone</small>)<br/>');
    }).catch(
      // Promesse rejetée
      function() {
        console.log("promesse rompue");
      });

  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Promise made (<small>Fin du code synchrone</small>)<br/>');
}
if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
 } else {
  log = document.getElementById('log');
  log.innerHTML = "L'exemple live n'est pas disponible pour votre navigateur car celui-ci ne supporte pas l'interface <code>Promise<code>.";
}
