import ProjetoCard from "./ProjetoCard"
import UrbanDict from '../assets/UrbanDict.png'
import Crespos from '../assets/crespos.png'
import StarWars from '../assets/StarWars.png'
import Portflow from '../assets/Portflow.png'

function CardContainer() {
    return (
        <section className="card-container">
            <section className="container pt-4 pb-5" id="projetos">
                <h2 className="section-h2 mb-5 mt-2">Projetos</h2>
                <div className="row justify-content-center">
                    <ProjetoCard src={"https://github.com/matEvangelista/whatsapp-data-vis/raw/main/imgs/media.png"}
                        alt="Vizualização WhatsApp"
                        icons={[
                            <i className="devicon-python-plain-wordmark"></i>
                            , <i className="devicon-pandas-original-wordmark"></i>,
                            <i className="devicon-jupyter-plain-wordmark"></i>
                        ]} url="https://github.com/matEvangelista/whatsapp-data-vis" />

                    <ProjetoCard src={UrbanDict} alt="Web Scraping Urban Dictionary"
                        icons={[<i className="devicon-python-plain-wordmark"></i>]}
                        url="https://github.com/matEvangelista/Urban-Dictionary-Scraper" />

                    <ProjetoCard src={"https://github.com/matEvangelista/wordcloud_debate/raw/master/wordcloud%20simples/ciro.png"}
                        alt="Word cloud debate Band"
                        icons={[<i className="devicon-python-plain-wordmark"></i>]}
                        url="https://github.com/matEvangelista/wordcloud_debate" />

                    <ProjetoCard
                        src={Portflow} alt="Portflow"
                        icons={[
                            <i className="devicon-html5-plain-wordmark"></i>,
                            <i className="devicon-css3-plain-wordmark"></i>,
                            <i className="devicon-bootstrap-plain"></i>
                        ]}
                        url="https://github.com/matEvangelista/vnw-portflow"
                        url_hospedado="https://matevangelista.github.io/vnw-portflow/"
                    />

                    <ProjetoCard
                        src={Crespos} alt="Tô de Cacho"
                        aboutText="Desafio do primeiro módulo do Vai na Web - Intermediário"
                        tech={["HTML", "CSS"]} icons={[
                            <i className="devicon-html5-plain-wordmark"></i>,
                            <i className="devicon-css3-plain-wordmark"></i>
                        ]}
                        url="https://github.com/matEvangelista/vnw-crespos"
                        url_hospedado="https://matevangelista.github.io/vnw-crespos/"
                    />

                    <ProjetoCard
                        src={StarWars} alt="Star Wars - Battlefront"
                        aboutText="Desafio do primeiro módulo do Vai na Web - Avançado"
                        tech={["HTML", "CSS"]} icons={[
                            <i className="devicon-html5-plain-wordmark"></i>,
                            <i className="devicon-css3-plain-wordmark"></i>
                        ]}
                        url="https://github.com/matEvangelista/vnw-desafio-star-wars"
                        url_hospedado={"https://matevangelista.github.io/vnw-desafio-star-wars/"}
                    />
                </div>
            </section>
        </section>
    )
}

export default CardContainer