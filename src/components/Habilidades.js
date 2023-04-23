import HabilidadeCard from "./HabilidadeCard"

function Habilidades() {
    return (
        <section className="habilidades" id="habilidades">
            <section className="container">
                <h2 className="section-h2">Habilidades</h2>
                <div className="row justify-content-center m-0 mt-5">
                    <HabilidadeCard name="Front-end"
                        icons={[
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" key="html" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" key="css" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" key="js" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" key="bootstrap" />
                        ]}
                    />
                    <HabilidadeCard
                        name={"Linguagens"}
                        icons={[
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" key="python" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" key="r" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" key="java" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" key="c" />
                        ]}
                    />
                    <HabilidadeCard
                        name={"Outras tecnologias"}
                        icons={[
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" key="linux" />,
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" key="git" />,
                        ]}
                    />
                </div>
            </section>
        </section>
    )
}

export default Habilidades