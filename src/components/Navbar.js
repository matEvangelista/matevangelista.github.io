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
                        <li className="nav-item">
                            <a className="nav-link" href="#projetos">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#habilidades">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cursos">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mateus-e-alcantara/">
                                <i class="devicon-linkedin-plain"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" rel="noreferrer" href="https://github.com/matEvangelista">
                                <i class="devicon-github-plain"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar