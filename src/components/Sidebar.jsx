import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div style={{height: "50vW", backgroundColor: "red", position:"fixed", top:"90px", left:0}}>
            <Link to ="/"><h2>Recetas</h2></Link>
            <Link to ="/add-recipe"><h2>Añadir Receta</h2></Link>
            <Link to="/about"><h2>Información</h2></Link>
        </div>
    )
}

export default Sidebar
