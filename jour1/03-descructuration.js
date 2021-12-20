
const etudiant = {
    nom : "Alain",
    age : 12 ,
    adresse : {
        rue : "75 rue du Paradis",
        cp : 75000,
        ville : "Paris"
    }
}
console.log(etudiant.nom); // Alain 
console.log(etudiant.adresse.rue);  // 75 rue du Paradis

// à partir de 2015 => ES6 (version 6 de javascript ) qui introduit le concept de desctruturation d'un objet 

const {rue} = etudiant.adresse ; // desctruturation d'un objet

console.log(rue) ; 

const { nom , age } = etudiant ; 
console.log( nom )
console.log( age)

// useState

function useState(){
    return [ "data" , "autre information" ]
}

const [info1 , info2] = useState() // déstructuration sur un tableau 

console.log(info1) ; // data
console.log(info2) ; // autre information


function calcul (objet){ // prend comme paramètre un objet avec 2 propriétés 
    console.log(objet.x * objet.y)
}

calcul({x: 2 , y : 3}); 

function calcul2 ( {x, y} ){ // desctructuration d'un objet qui est un paramètre de ma fonction
    console.log( x * y )
}



