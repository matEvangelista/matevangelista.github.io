function ProjetoCard({ src, alt, icons, url, url_hospedado }) {


    return (
        <div className="card-projeto shadow-sm col-10 col-md-5 col-lg-3 p-0 m-3 text-white">
            <img className="p-0" src={src} alt={alt} />
            <div className="icons-container">
                <div className="icons">
                    {icons.map(
                        (x) => (
                            x
                        )
                    )}
                </div>
                <span className="text-icons">{alt}</span>
            </div>
            <div className="links-card justify-content-evenly row">
                {url_hospedado === undefined ? <a href={url} className="text-center col-8 " target="_blank" rel="noreferrer">Repositório</a> :
                    <a href={url} className="text-center col-5" target="_blank" rel="noreferrer">Repositório</a>}
                {url_hospedado === undefined ? null : <a className='text-center col-5' target="_blank" rel="noreferrer" href={url_hospedado}>Projeto</a>}
            </div>
        </div>
    )
}

export default ProjetoCard