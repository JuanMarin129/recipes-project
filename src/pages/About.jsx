import { Link } from "react-router-dom"

function About() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <h1>AQUI IRA LA PAGINA ABOUT</h1>
    <Link to="/"><button>Back</button></Link>
    </div>
  )
}

export default About