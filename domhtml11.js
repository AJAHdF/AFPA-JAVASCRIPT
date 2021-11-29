// parcourir les composants du DOM
const Elements = document.querySelectorAll("p");
for (const elt of Elements ) { 
        console.log(elt.innerText);
}
for (const elt in Elements ) { 
    console.log(elt);
}
// console.log(Elements);

const elt2 = document.getElementById('main');
console.log(elt2);
// retourne les enfants de Id main
console.log(elt2.children);
// retourne les parents Id main
console.log( elt2.parentElement);
// retourne l élément suivant
console.log( elt2.nextElementSibling);
// retourne l élément precedent
console.log( elt2.previousElementSibling);

let elt = document.getElementById('main');
elt.innerHTML = "<ul><li>Elément 1 avec puce</li><li>Elément 2 avec puce</li></ul>";
elt.classList.add("nouvelleClasse");    // Ajoute la classe nouvelleClasse à l'élément
elt.classList.remove("nouvelleClasse"); // Supprime la classe nouvelleClasse que l'on venait d'ajouter
elt.classList.contains("nouvelleClasse");   // Retournera false car on vient de la supprimer
elt.classList.replace("oldClass", "newClass"); // Remplacera oldClass par newClass si oldClass était présente sur l'élément
console.log(elt);