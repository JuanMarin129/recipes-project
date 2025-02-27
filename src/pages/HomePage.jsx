import List from "../components/List"

function HomePage() {

    return (

        <div style={{width: "100%"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <h3>Imagen</h3>
                <h3>Nombre</h3>
                <h3>Calorías</h3>
                <h3>Servings</h3>
                <h3>Delete</h3>
            </div>
            <List />
        </div>
    )
}

export default HomePage
