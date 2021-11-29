// let b1 = document.getElementById('b1'); //On accède au bouton #b1
// let winSize = 'width=500, height=500';

// /*Nous verrons addEventListener() plus tard dans ce cours. Ici, on l'utilise pour
//  *exécuter openWindow() dès qu'un utilisateur clique sur #b1*/
// b1.addEventListener('click', openWindow);

// //On définit notre fonction openWindow()
// function openWindow(){
//     //On recupère l'information renvoyée par open() dans une variable "fenetre"
//     fenetre = window.open('https://www.codepen.io', '', winSize);
// }


let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');
let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8'); 
let winSize = 'width=500, height=500';

b1.addEventListener('click', openWindow);
b2.addEventListener('click', resizeWindowBy);
b3.addEventListener('click', resizeWindowTo);

function openWindow(){
    //On recupère l'information renvoyée par open() dans une variable "fenetre"
    fenetre = window.open('', '', winSize);
}
function resizeWindowBy(){
    fenetre.resizeBy(200, 100);
}
function resizeWindowTo(){
    fenetre.resizeTo(960, 720);
}