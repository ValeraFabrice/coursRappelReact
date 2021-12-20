const Article = ( props ) => {
    return (<div>
        <h3>{props.data.titre}</h3>
        <p>{props.data.contenu}</p>
    </div>)
}

export default Article ; 