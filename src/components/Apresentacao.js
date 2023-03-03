import Curriculo from "../assets/Currículo - Mateus Evangelista de Alcântara.pdf"

function Apresentacao() {
    return (
        <section className="apresentacao" id="parallax">
            <div className="container justify-items-center">
                <h1 className="text-center w-100">Mateus Evangelista</h1>
                <div className="row">
                    <p className="col-10 ms-auto me-auto text-center d-flex flex-column">
                        <span>Olá. Meu nome é Mateus e busco trabalho como desenvolvedor júnior ou estagiário.</span>
                        <span>Posso trabalhar com front-end, Python e Java.</span>
                        <span>Aqui, você pode ver meus projetos e entrar em contato comigo.</span>
                    </p>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-6 text-center">
                        <a className="curriculo" href={Curriculo}
                            target="_blank" rel="noreferrer">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apresentacao