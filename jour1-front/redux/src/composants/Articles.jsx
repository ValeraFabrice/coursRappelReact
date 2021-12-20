import { useState } from "react"
import Article from "./Article";

const Articles = () => {
    const [articles] = useState([
        {"id" : 1 , "titre" : "Article 1", "contenu" : "lorem ipsum" , "userId" : 1 },
        {"id" : 2 , "titre" : "Article 2", "contenu" : "lorem ipsum" , "userId" : 1 }
    ]);
    return (
        <>
           {articles.map( (a , index) => {
               return ( <Article key={index} data={a} />)
           } )}
        </>
    )
}

export default Articles;