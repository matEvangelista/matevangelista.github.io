import data from "../assets/projects.json";
import ProjetoCard from "./ProjetoCard";

function CardContainer() {
    const projects = data.projects;

    function returnsProjectComponent(projects) {
        return (
            <ProjetoCard
                key={projects.alt}
                alt={projects.alt}
                icons={projects.icons}
                src={projects.src}
                url={projects.url}
                url_hospedado={projects.url_hospedado}
                about={projects.about}
            />
        );
    }

    return (
        <section className="card-container">
            <section className="container pt-4 pb-5" id="projetos">
                <h2 className="section-h2 mb-5 mt-2">Projetos</h2>
                <div className="row justify-content-center">
                    {projects.map(returnsProjectComponent)}
                </div>
            </section>
        </section>
    );
}

export default CardContainer;
