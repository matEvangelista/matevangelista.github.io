function HabilidadeCard({ name, icons }) {

    const index = []
    for (let i = 0; i < icons.length; i++)
        index.push(i)

    function returnsTechIcons(i) {
        return (
            <>
                {icons[i]}
            </>
        )
    }

    return (
        <div className="card-habilidade shadow-sm col-10 col-md-5 col-lg-3 m-3">
            <h3>{name}</h3>
            <div className="icones">
                {index.map(returnsTechIcons)}
            </div>
        </div>
    )
}

export default HabilidadeCard