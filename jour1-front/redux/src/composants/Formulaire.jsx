import {useState} from "react";
import axios from "axios";

const Formulaire = () => {
    let api = "http://localhost:3000/articles" ;
    const [article, setArticle] = useState( () => {
        return {titre : "" , contenu : ""} ; // garanti que article ne sera initialiser que au chargement du composant (1 seule fois)
    } )
    const change = e => {
        const value = e.target.value;
        const name = e.target.name;
        setArticle( prevArticle => { return {...prevArticle , [name]:value}} )
    }
    const submit = async e => {
        e.preventDefault();
        //vérifier que formulaire n'est pas vide
        if(article.titre != "" && article.contenu != "" ){
            // comment ajouter des données sur dans la base de données
            await axios.post( api , article  );
            e.target.reset() // vider le formulaire une fois que l'on valide
            setArticle( prevArticle => {return {...prevArticle , titre : "" , contenu : ""}} ) // réinitialiser le state du composant 
        }
    }
    return( 
        <form onSubmit={submit}>
            <input type="text" className="form-control" placeholder="titre article" onChange={change} name="titre" />
            <textarea className="form-control my-4" placeholder="contenu article" onChange={change} name="contenu"></textarea>
            <input type="submit" className="btn btn-outline-dark"/>
        </form>
     )
}

export default Formulaire ; 