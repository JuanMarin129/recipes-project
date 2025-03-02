import { Link } from "react-router-dom"




function Sidebar(props) {

    // CSS

    const sideBarCSS = {
        alignItems: "center", 
        borderRadius: "10px",
        border: "solid", 
        paddingLeft: "15px",
        marginLeft: "15px", 
        height: "48vW", 
        width: "10vW", 
        backgroundColor: "#FF6B6B", //   #FF6B6B rojo tomate  
        position:"fixed", 
        top:"99px", 
        left:0,
        transform: props.cambioScaleY,
        transition: "all 0.4s",

    }


    return (
        <div style={sideBarCSS}>  
            <Link to ="/"><h2>Recetas</h2></Link>
            <Link to ="/add-recipe"><h2>Añadir Receta</h2></Link>
            <Link to="/about"><h2>Información</h2></Link>
        </div>
    )
}

export default Sidebar
