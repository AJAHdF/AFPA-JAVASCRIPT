function Utilisateur (n, a, m){
    this.nom = n;
    this.age = a;
    this.mail = m;
    this.bonjour = function(){
        alert('bonjour, je suis ' + this.nom[0] + ' ' + this.nom[1] + ' j\'ai ' + this.age + ' ans mon courriel est ' + this.mail);
    }
}
let util= new Utilisateur(['John', 'Lenon', 'de Londres'], 99, 'jlenon@paradis.com');
util.bonjour();
console.log(util);
document.getElementById('p1').innerHTML ='Nom complet : ' + util['nom'].join(" ");  //affichage du tableau en entier avec caractere de separation " "
document.getElementById('p2').innerHTML ='Prénom : ' + util['nom'][0]; // Affichage 
document.getElementById('p3').innerHTML ='Age : ' + util['age'];
