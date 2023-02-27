function Curso({ name, url }) {

    function anchorTag(url) {
        return (<a href={url} target="_blank" rel="noreferrer">Certificado</a>)
    }

    return (
        <div className="card-curso shadow-sm col-10 col-md-5 col-lg-3 m-3">
            <h3>{name}</h3>
            {url === undefined ? <span className="andamento">Em andamento</span> : anchorTag(url)}
        </div>
    )
}

export default Curso