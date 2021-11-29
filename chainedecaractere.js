let chaine = 'Bonjour, je suis Pierre\n et mon no. est [06-06-06-06-38]';
let masque1= /pierre/; // recherche "pieer" exactement avec m^me case...
let masque2= /pierre/i; // recherche "pieer" queqle soit la case...
let masque3= /e$/; // recherche "e" en fin de chaine..
let masque4= /e$/gm; // cherche "e" en fin de chaine ligne...
let masque5= / ./gs; //cherche tt caractère et et effectue une recherche globale

let p0 = document.getElementById('p0');
let p1 = document.getElementById('p1');

p0.textContext = chaine;
p1.innerHTLM = 
'Résultat maque 1 : ' + chaine.match(masque1) + 
'<br>Résultat maque 2 : ' + chaine.match(masque2) + 
'<br>Résultat maque 3 : ' + chaine.match(masque3) + 
'<br>Résultat maque 4 : ' + chaine.match(masque4) + 
'<br>Résultat maque 5 : ' + chaine.match(masque5);