import { Link } from "react-router-dom";

function About() {
  return (
    <div id="aboutDivCSS">
      <h1>PROYECTO</h1>
      <p className="descripcionProyecto">
            Página web creada con React, la cual provee un listado con recetas de comida y páginas con los detalles de cada una de ellas.<br/> <br/> El usuario tienen la capacidad de añadir, eliminar o editar elementos.<br/> <br/>

            <span style={{textDecoration:"underline"}}>Posibles funcionalidades</span>: Filtrar la lista por nivel de calorías y añadir un video de la preparación en los detalles de cada receta.
      </p>
      <h1>ESTUDIANTES</h1>
      <div id="contenedorEstudiantes">
        <div class="datosEstudiante">
          <img src="src\images\imagen_Juan_01.jpg" alt="juan" width="200px"/>
          <h3>Juan Marín Ortíz</h3>
          <div class="enlacesEstudiante">
            <a className="linkedin" href="https://www.linkedin.com/in/juan-marin-ortiz-5a618610b/">LinkedIn</a>
            <a className="github" href="https://github.com/JuanMarin129">GitHub</a>
          </div>
          <p className="descripcionEstudiante">
          Pasivo, receptivo y con cero ganas de usar redes sociales.<br/> Procrastinador y capacidad de mandarle los problemas a mi yo del futuro.
          </p>
        </div>
        <div class="datosEstudiante">
          <img src="src\images\imagen_samuel.jpg" alt="samuel" width="200px"/>
          <h3>Samuel Pérez Besada</h3>
          <div class="enlacesEstudiante">
            <a className="linkedin" href="https://www.linkedin.com/in/samuel-p%C3%A9rez-besada-136373231/">LinkedIn</a>
            <a className="github" href="https://github.com/xMrAvocado">GitHub</a>
          </div>
          <p className="descripcionEstudiante">
          Proactivo, asertivo, con capacidades sociales y me gusta trabajar en equipo. <br/>Constante y con ganas de aprender.
          </p>
        </div>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default About;
