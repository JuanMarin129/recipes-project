import Sidebar from '../components/Sidebar'
import { useState } from 'react';


// CSS

const navBarCSS = {
    backgroundColor: "#FFF6E5", // #FFF6E5 Blanco cremoso
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    position:"fixed", 
    width:"100vW",
    padding: "10px 0px"
}

let cambioScaleY = "";


function Navbar() {
    const [stateSidebar, setStateSidebar] = useState(false);

    const handleStateSidebar = () => {
        let clone;
        if(stateSidebar === true){
            clone = false;
            cambioScaleY = "scaleY(0)"; // Lo hacemos invisible

        }else if(stateSidebar === false){
            clone = true;
            cambioScaleY = "scaleY(1)"; // Lo hacemos visible
        }
        console.log(clone)
        setStateSidebar(clone);
    };

    return (
        <div style={navBarCSS}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "30px"}} >
                <img width={"40vW"} height={"40vW"} src="..\src\images\icono_menu_black_01.png" alt="logo-menu" onClick={() => handleStateSidebar()}/>
                <h3 style={{paddingLeft: "10px"}}>Recetas</h3>
            </div>
           
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingRight: "30px"}}>
                <img style={{margin: "0.5%"}} width={"75vW"} src="https://randomuser.me/api/portraits/women/44.jpg" alt="foto" />
                <h2 style={{width: "15vW", textAlign: "center"}}>Recipes Project</h2>
            </div>
            <Sidebar cambioScaleY={cambioScaleY} />
        </div>
    )
}

export default Navbar


// height: "15vW"
