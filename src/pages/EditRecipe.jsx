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
        
        <div className="formCSS">
        <span className="tituloForm">Edit Recipe</span>
        <label>
            Id:&nbsp;
            <input name="id" type="text" placeholder={recetaEditada.id} readOnly/>
        </label>
        <label>
            Full Name:&nbsp;
            <input value = {recetaEditada.name} name="name" type="text" placeholder="Name" onChange={handleAll}/>
        </label>
        <label>
            Calories:&nbsp;
            <input value = {recetaEditada.calories} name="calories" type="number" min={0} placeholder="Calories" onChange={handleAll}/>
        </label>
        <label>
            Image:&nbsp;
            <input value = {recetaEditada.image} name="image" type="url" placeholder="Image" onChange={handleAll}/>
        </label>
        <label>
            Servings:&nbsp;
            <input value = {recetaEditada.servings} name="servings" type="number" min={1} placeholder="Servings" onChange={handleAll}/>
        </label>
        <label>
            Description:&nbsp;
            <textarea className="textArea" value = {recetaEditada.description} cols="50" rows="5" name="description"  placeholder="Description" onChange={handleAll}/>
          </label>

        <div className="btnsForms">
        <button type="submit">Change</button>
        <Link to="/"><button>Home</button></Link>
        </div>
        </div>
    </form>
    
    </div>
  )
}

export default EditRecipe
