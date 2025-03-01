import List from "../components/List"

function HomePage(props) {

    return (

        <div style={{display: "flex", flexDirection:"column", width: "100vW", backgroundColor:"#53403C", color: "white", textAlign: "center"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", padding: "0px 20px"}}>
                <h3>Imagen</h3>
                <h3>Nombre</h3>
                <h3>Calorías</h3>
                <h3>Servings</h3>
                <h3>Delete</h3>
            </div>
            <List 
            listRecipes = {props.listRecipes}
            setListRecipes = {props.setListRecipes}
            />
        </div>
    )
}

export default HomePage
