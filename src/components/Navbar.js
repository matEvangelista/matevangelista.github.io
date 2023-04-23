function Navbar() {
    return (
        <nav className="navbar shadow-sm navbar-expand-md p-0 navbar-dark bg-dark fixed-top" id="navbar-spy">
            <div className="container">
                <a className="navbar-brand" href="index.html">matEvangelista</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-line line"></span>
                    <span className="toggler-icon middle-line line"></span>
                    <span className="toggler-icon bottom-line line"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item" key="projetos">
                            <a className="nav-link" href="#projetos">Projetos</a>
                        </li>
                        <li className="nav-item" key="Habilidades">
                            <a className="nav-link" href="#habilidades">Habilidades</a>
                        </li>
                        <li className="nav-item" key="Cursos">
                            <a className="nav-link" href="#cursos">Cursos</a>
                        </li>
                        <li className="nav-item" key="Contato">
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                        <li className="nav-item" key="Sobre">
                            <a className="nav-link" href="#sobre">Sobre</a>
                        </li>
                        <li className="nav-item" key="LinkedIn">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mateus-e-alcantara/">
                                <i className="devicon-linkedin-plain"></i>
                            </a>
                        </li>
                        <li className="nav-item" key="GitHub">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/matEvangelista">
                                <i className="devicon-github-plain"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar