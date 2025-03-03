import { useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";


function EditRecipe(props) {

    const parametrosDinamicos = useParams();
    //console.log(parametrosDinamicos.id);


    let clone = props.listRecipes.find((cadaReceta) => {
        if(cadaReceta.id === parametrosDinamicos.id)
            return true;
        else
            return false;
    })

     //console.log(clone);

    const [recetaEditada, setRecetaEditada] = useState({
        id:clone.id,
        name: clone.name,
        calories: clone.calories,
        image: clone.image, 
        servings: clone.servings,
        description: clone.description
    })

    //console.log(recetaEditada);

    //console.log(props.listRecipes[0])

    const handleAll = ((event)=>{
        let name = event.target.name;
        let cloneReceta = {...recetaEditada}
        cloneReceta[name] = event.target.value
        //console.log("Tras cambiar el valor, cloneReceta es " + cloneReceta);
        setRecetaEditada(cloneReceta)
    })

    const handleSubmit = ((event)=>{
        event.preventDefault();
    
        const cloneLista = JSON.parse(JSON.stringify(props.listRecipes));

        cloneLista.forEach((cadaReceta) => {
            if(cadaReceta.id === parametrosDinamicos.id){
                cadaReceta.name = recetaEditada.name;
                cadaReceta.calories = recetaEditada.calories;
                cadaReceta.image = recetaEditada.image;
                cadaReceta.servings = recetaEditada.servings;
                cadaReceta.description = recetaEditada.description;
            }
        })

        //cloneLista.unshift(recetaEditada)
        props.setListRecipes(cloneLista);
    
      })
  return (
    <div >
    <form onSubmit={handleSubmit} >
        
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <span>Edit Recipe</span>
        <label>
            Id
            <input name="id" type="text" placeholder={recetaEditada.id} readOnly/>
        </label>
        <label>
            Full Name
            <input value = {recetaEditada.name} name="name" type="text" placeholder="Name" onChange={handleAll}/>
        </label>
        <label>
            Calories
            <input value = {recetaEditada.calories} name="calories" type="number" min={0} placeholder="Calories" onChange={handleAll}/>
        </label>
        <label>
            Image
            <input value = {recetaEditada.image} name="image" type="url" placeholder="Image" onChange={handleAll}/>
        </label>
        <label>
            Servings
            <input value = {recetaEditada.servings} name="servings" type="number" min={1} placeholder="Servings" onChange={handleAll}/>
        </label>
        <label>
            Description
            <input value = {recetaEditada.description} name="description" type="textarea" placeholder="Description" rows = "10" cols = "100" onChange={handleAll}/>
          </label>

          <button type="submit">Change</button>
          <Link to="/"><button>Home</button></Link>
        </div>
    </form>
    
    </div>
  )
}

export default EditRecipe
