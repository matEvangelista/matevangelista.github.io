import Curso from "./Curso"
import data from "../assets/projects.json"

function Cursos() {

    const courses = data.courses;

    function returnsCoursesComponent(projects) {
        return (
            <Curso name={projects.name} url={projects.url}/>
        );
    }

    return (
        <section className="cursos" id="cursos">
            <section className="container">
                <h2 className="section-h2">Cursos</h2>
                <div className="row justify-content-center m-0 mt-5">
                    {courses.map(returnsCoursesComponent)}
                </div>
            </section>
        </section>
    )
}

export default Cursos