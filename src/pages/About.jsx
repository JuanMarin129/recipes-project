import { Link } from "react-router-dom"

function About() {
  return (
    <div id="aboutDivCSS">
    <h1>AQUI IRA LA PAGINA ABOUT</h1>
    <p style={{textAlign:"center", width: "40vw"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Link to="/"><button>Back</button></Link>
    </div>
  )
}

export default About