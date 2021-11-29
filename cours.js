// function Ligne(longueur){
//     this.longueur = longueur;
// }
// Ligne.prototype.taille = function(){
//     document.getElementById('p1').innerHTML = 'Longueur : ' + this.longueur};

// function Rectangle(longueur, largeur){
//     Ligne.call(this, longueur);
//     this.largeur = largeur;
// }
// Rectangle.prototype = Object.create(Ligne.prototype);
// Rectangle.prototype.constructor = Rectangle;
// Rectangle.prototype.aire = function(){
//     document.getElementById('p2').innerHTML =
//     'Aire : ' + this.longueur * this.largeur};

// function Parallelepipede(longueur, largeur, hauteur){
//     Rectangle.call(this, longueur, largeur);
//     this.hauteur = hauteur;
// }
// Parallelepipede.prototype = Object.create(Rectangle.prototype);
// Parallelepipede.prototype.constructor = Parallelepipede;
// Parallelepipede.prototype.volume = function(){
//     document.getElementById('p3').innerHTML =
//     'Volume : ' + this.longueur * this.largeur * this.hauteur};

// let geo = new Parallelepipede(5, 4, 3);
// geo.volume();
// geo.aire();
// geo.taille();

class Ligne{
    /*Nous n'avons pas besoin de préciser "function" devant notre constructeur
     *et nos autres méthodes classe*/
    constructor(nom, longueur){
        this.nom = nom;
        this.longueur = longueur;
    }
    
    taille(){document.getElementById('p1').innerHTML +=
        'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'};
}

let geo1 = new Ligne('geo1', 10);
let geo2 = new Ligne('geo2', 5);
geo1.taille();
geo2.taille();

class Rectangle extends Ligne{
    constructor(nom, longueur, largeur){
        super(nom, longueur); //Appelle le constructeur parent
        this.largeur = largeur;
    }
    
    aire(){document.getElementById('p2').innerHTML +=
    'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'};
}

let geo3 = new Rectangle('geo3', 7, 5);
geo3.aire();
geo3.taille();