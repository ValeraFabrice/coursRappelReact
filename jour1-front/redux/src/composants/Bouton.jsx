// lorsque je vais cliquer sur le bouton augmenter un chiffre de +1 et afficher dans la console 
// initaliser le chiffre avec la fonction useState
import {useState} from "react";

const Bouton = () => {
    //const [chiffre, setChiffre] = useState(() => { return 0}); // au chargement de mon composant dans le DOM 
    const [ chiffre, setChiffre ] = useState(() => { return {id : 1 , valeur : 0}}); // au chargement de mon composant dans le DOM 

    const augmenter = () => {
        setChiffre((prevChiffre) => {
            console.log(prevChiffre) ; // récupérer la valeur précédente chiffre
            return { ...prevChiffre , valeur : prevChiffre.valeur + 1 }
        })
        console.log(chiffre);
    }
    return (
        <button className="btn btn-danger" onClick={augmenter}>
            Action
        </button>
    )
}

export default Bouton ; 