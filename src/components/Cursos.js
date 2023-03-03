import Curso from "./Curso"

function Cursos() {
    return (
        <section className="cursos" id="cursos">
            <section className="container">
                <h2 className="section-h2">Cursos e Currículo</h2>
                <div className="row justify-content-center m-0 mt-5">
                    <Curso name={"Carreira front-end - Vai na Web"} />
                    <Curso name={"Git e GitHub - Hora de Codar"} url={"https://www.udemy.com/certificate/UC-a023ff50-ed8b-496d-b78c-928c30e2f7dc/"} />
                    <Curso name={"Microsoft Excel - Básico ao avançado"} url={"https://www.udemy.com/certificate/UC-IWP6ZG1C/"} />
                    <Curso name={"Python - Geek University"} />
                </div>
            </section>
        </section>
    )
}

export default Cursos