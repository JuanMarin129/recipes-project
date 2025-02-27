import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div style={{height: "50vW", backgroundColor: "red", position:"absolute"}}>
            <Link to ="/"><h2>Recetas</h2></Link>
            <h2>Añadir Receta</h2>
            <Link to="/about"><h2>Información</h2></Link>
        </div>
    )
}

export default Sidebar
