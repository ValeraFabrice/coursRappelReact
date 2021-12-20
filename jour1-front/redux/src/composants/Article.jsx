const Article = ({data}) => { // avec destructuration sur props
    return (<div>
        <h3>{data.titre}</h3>
        <p>{data.contenu}</p>
    </div>)
}
export default Article ; 

/* const Article = (props) => { // sans destructuration de props
    return (<div>
        <h3>{props.data.titre}</h3>
        <p>{props.data.contenu}</p>
    </div>)
}
export default Article ;  */