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
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <img
        src={foundRecipe.image}
        alt=""
        width="200px"
        height="200px"
        style={{ textAlign: "center", margin: "5px" }}
    />
    <h1 style={{ textAlign: "center", margin: "5px" }}>{foundRecipe.name}</h1>
    <p>{foundRecipe.description}</p>
    <Link to={`/edit-recipe/${parametrosDinamicos.recipeId}`}><button>Editar</button></Link>
    <Link to="/"><button>Back</button></Link>
    </div>
  )
}

export default ItemDetails
