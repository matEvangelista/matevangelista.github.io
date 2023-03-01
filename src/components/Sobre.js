import foto from '../assets/foto-principal.jpg'

function Sobre() {

    function semester() {
        let startDate = new Date(2022, 0, 0);
        let endDate = new Date();
        let months = Math.ceil((endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear())) / 6);
        const list = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'sétimo', 'oitavo']
        return list[months - 1];
    }
    return (
        <section className="sobre" id="sobre">
            <section className="container">
                <h2 className="section-h2">Sobre mim</h2>
                <figure className="row justify-content-around align-items-center mt-5">
                    <img src={foto} id="main-img" alt="Mateu Evangelista" className="col-md-6 col-10" />
                    <figcaption className="col-md-6 mt-3 mt-md-0 col-10">
                        <p class="about-me-text">Estou no {semester()} período do bacharelado em
                            Sistemas
                            de Informação da Universidade Federal do Estado do Rio de Janeiro. Tenho interesse em <span
                                class="highlight">estatística, web scraping, web development e análise de dados.</span></p>
                        <p class="about-me-text">Atualmente, <span class="highlight">busco um estágio ou trabalho</span> que envolva
                            qualquer uma das áreas mencionadas. Sou curioso, diligente e tenho muita vontade de trabalhar.
                        </p>
                    </figcaption>
                </figure>
            </section>
        </section>
    )
}

export default Sobre