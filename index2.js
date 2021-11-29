function Utilisateur(n,a,m){
    this.nom = n;
    this.age = a;
    this.mail = m;
};
Utilisateur.prototype.taille =170;
Utilisateur.prototype.bonjour = function(){
    alert('Bonjour, je suis ' + this.nom[0] + ',j\'ai ' + this.age + ' ans');
};

let pierre = new Utilisateur( [ 'Pierre' , 'Charpentier'], 50, 'pierre@gmail.com');
let mathilde = new Utilisateur( [ 'Mathilde' , 'Fievet'], 34, 'math03@gmail.com');
console.log(Utilisateur.prototype)
console.log(pierre);
console.log(mathilde);