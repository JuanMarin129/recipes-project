import { useState } from "react"
import { Link } from "react-router-dom"
function EditRecipe(props) {
    const [recetaEditada, setRecetaEditada] = useState({
        id: props.listRecipes.id,
        name: props.listRecipes.name,
        calories: props.listRecipes.calories,
        image: props.listRecipes.image, 
        servings: props.listRecipes.servings,
        description: props.listRecipes.description
    })

    console.log(props.listRecipes[0])

    const handleAll = ((event)=>{
        let name = event.target.name;
        let clone = {...recetaEditada}
        clone[name] = event.target.value
        setRecetaEditada(clone)
    })

    const handleSubmit = ((event)=>{
        event.preventDefault();
    
        const clone = [...props.listRecipes]
        clone.unshift(recetaEditada)
        props.setListRecipes(clone);
    
        setRecetaEditada({
            id:"",
            name: "",
            calories: 0,
            image: "", 
            servings: 1,
            description: ""
        })
      })
  return (
    <div >
    <form onSubmit={handleSubmit} >
        
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <span>Edit Recipe</span>
        <label>
            Id
            <input value = {recetaEditada.id} name="id" type="text" placeholder="Id" onChange={handleAll}/>
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

          <button type="submit">Edit Recipe</button>
          <Link to="/"><button>Home</button></Link>
        </div>
    </form>
    
    </div>
  )
}

export default EditRecipe