function Contato() {
    return (
        <section className="contato">
            <section className="container" id="contato">
                <h2 className="section-h2">Entre em contato comigo</h2>
                <form className="row justify-content-center mt-5" id="contactform"
                    action="https://formsubmit.io/send/mateus.evangelista.alcantara@gmail.com" method="POST">
                    <div className="col-10 col-md-8">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Nome" required />
                            <label htmlFor="floatingInput">Nome</label>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="name" name="email" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Endereço de email</label>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <div className="form-floating">
                            <textarea rows='7' name="comment" className="form-control h-100" placeholder="Mensagem"
                                id="comment" required></textarea>
                            <label htmlFor="floatingTextarea">Mensagem</label>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <input value="Enviar" type="submit" className="submit-button col-6 col-md-3 ms-0" />
                    </div>
                </form>
                <h2 className="section-h2 mt-3">Redes</h2>
                <div className="row mt-3">
                    <div className="col-10 col-12 d-flex justify-content-around">
                        <a href="https://github.com/matEvangelista" target="_blank" rel="noreferrer">
                            <i className="devicon-github-original"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-e-alcantara/" target="_blank" rel="noreferrer">
                            <i className="devicon-linkedin-plain"></i>
                        </a>
                        <a href="https://medium.com/@mateus.evangelista.alcantara" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-medium"></i>
                        </a>
                    </div>
                </div>
                <div className="mt-5 row text-center email-container">
                    <span className="col-12">Se preferir, você pode entrar em contato diretamente pelo e-mail:</span>
                    <span className="col-12">mateus.evangelista.alcantara@gmail.com</span>
                </div>
            </section>
        </section>
    )
}

export default Contato