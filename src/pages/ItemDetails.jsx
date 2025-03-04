import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import allRecipes from "../assets/recipes.json";

function ItemDetails(props) {
    /*PARAMETROS DINAMICOS PARA DETAILS*/ 
  const parametrosDinamicos = useParams();
  //console.log(parametrosDinamicos.recipeId);


  const foundRecipe = props.listRecipes.find((cadaReceta) => {
    if (cadaReceta.id === parametrosDinamicos.recipeId) {
        //console.log(cadaReceta.id)
      return true
    } else {
      return false
    }
    
  })



  return (
    <div id="detallesReceta">
    <img
        src={foundRecipe.image}
        alt=""
        width="300px"
        height="300px"
        style={{ textAlign: "center", margin: "5px" }}
    />
    <h1 style={{ textAlign: "center", margin: "5px" }}>{foundRecipe.name}</h1>
    <p>{foundRecipe.description}</p>
    <div id="btnsDetails">
    <Link to={`/edit-recipe/${parametrosDinamicos.recipeId}`}><button>Editar</button></Link>
    <Link to="/"><button>Back</button></Link>
    </div>
    
    </div>
  )
}

export default ItemDetails
