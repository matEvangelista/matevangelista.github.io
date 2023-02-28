function Contato() {
    return (
        <section className="contato">
            <section className="container" id="contato">
                <h2 className="section-h2">Entre em contato comigo</h2>
                <form className="row justify-content-center mt-5" id="contactform"
                    action="https://formsubmit.io/send/mateus.evangelista.alcantara@gmail.com" method="POST">
                    <div className="col-10 col-md-8">
                        <div className="form-floating">
                            <input type="text" class="form-control" id="name" name="name" placeholder="Nome" required />
                            <label for="floatingInput">Nome</label>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <div class="form-floating">
                            <input type="email" class="form-control" id="name" name="email" placeholder="name@example.com" required />
                            <label for="floatingInput">Endereço de email</label>
                        </div>
                    </div>
                    <div className="col-10 col-md-8">
                        <div class="form-floating">
                            <textarea rows='7' name="comment" class="form-control h-100" placeholder="Mensagem"
                                id="comment" required></textarea>
                            <label for="floatingTextarea">Mensagem</label>
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
                            <i class="devicon-github-original"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-e-alcantara/" target="_blank" rel="noreferrer">
                            <i class="devicon-linkedin-plain"></i>
                        </a>
                        <a href="https://medium.com/@mateus.evangelista.alcantara" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-medium"></i>
                        </a>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contato