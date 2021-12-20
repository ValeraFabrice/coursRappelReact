import { useState , useEffect  } from "react"
import { useSelector } from "react-redux"
import Article from "./Article"; 
import axios from "axios"; // requete http => appeler notre base de données 
const Articles = () => {
    /* let [articles , setArticle] = useState( [] );
    useEffect( async () => {
        // requete http vers http://localhost:3000/articles get
        const { data } = await axios.get("http://localhost:3000/articles")
        // json-server --watch db.json
        // pause rdv 13h36 bon appétit @ toute suite !! 
        setArticle(data);
    } , [] ) */

    const articles = useSelector((state) => { return state })

    return (
        <>
           { articles.map( (a , index) =>  <Article key={index} data={a} /> )}
        </>
    )
}

export default Articles;