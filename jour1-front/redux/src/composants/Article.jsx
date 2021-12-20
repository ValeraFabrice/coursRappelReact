const Article = ({data}) => {
    return (<div>
        <h3>{data.titre}</h3>
        <p>{data.contenu}</p>
    </div>)
}

export default Article ; 