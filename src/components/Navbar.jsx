import Sidebar from '../components/Sidebar'
import { useState } from 'react';

function Navbar() {
    const [stateSidebar, setStateSidebar] = useState(false);

    const handleStateSidebar = () => {
        let clone;
        if(stateSidebar === true){
            clone = false;
        }else if(stateSidebar === false){
            clone = true;
        }
        console.log(clone)
        setStateSidebar(clone);
    };

    return (
        <div style={{backgroundColor: "blue", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position:"fixed", width:"100vw"}}>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}} >
                <img width={"30vW"} height={"30vW"} src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-icon.png" alt="logo-menu" onClick={() => handleStateSidebar()}/>
                <h3>Recetas</h3>
            </div>
           
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <img style={{margin: "0.5%"}} width={"75vW"} src="https://randomuser.me/api/portraits/women/44.jpg" alt="foto" />
                <h2 style={{width: "15vW", textAlign: "center"}}>Recipes Project</h2>
            </div>
            {stateSidebar ?
            <Sidebar />
            : false}
        </div>
    )
}

export default Navbar


// height: "15vW"
