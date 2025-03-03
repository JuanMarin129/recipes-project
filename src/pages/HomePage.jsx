import List from "../components/List"

function HomePage(props) {

    return (

        <div id="homepageCSS">
            <div id="divTitulosMenu">
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
