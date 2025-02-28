import { useState } from "react"
import { Link } from "react-router-dom"

function AddRecipe(props) {

    const [nuevaReceta, setNuevaReceta] = useState({
        id:"",
        name: "",
        calories: 0,
        image: "", 
        servings: 1,
        description: ""
    })

    const handleAll = ((event)=>{
        let name = event.target.name;
        let clone = {...nuevaReceta}
        clone[name] = event.target.value
        setNuevaReceta(clone)
    })

    const handleSubmit = ((event)=>{
        event.preventDefault();
    
        const clone = [...props.listRecipes]
        clone.unshift(nuevaReceta)
        props.setListRecipes(clone);
    
        setNuevaReceta({
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
        <span>Add Recipe</span>
        <label>
            Id
            <input value = {nuevaReceta.id} name="id" type="text" placeholder="Id" onChange={handleAll}/>
        </label>
        <label>
            Full Name
            <input value = {nuevaReceta.name} name="name" type="text" placeholder="Name" onChange={handleAll}/>
        </label>
        <label>
            Calories
            <input value = {nuevaReceta.calories} name="calories" type="number" min={0} placeholder="Calories" onChange={handleAll}/>
        </label>
        <label>
            Image
            <input value = {nuevaReceta.image} name="image" type="url" placeholder="Image" onChange={handleAll}/>
        </label>
        <label>
            Servings
            <input value = {nuevaReceta.servings} name="servings" type="number" min={1} placeholder="Servings" onChange={handleAll}/>
        </label>
        <label>
            Description
            <input value = {nuevaReceta.description} name="description" type="textarea" placeholder="Description" rows = "10" cols = "100" onChange={handleAll}/>
          </label>

          <button type="submit">Add Recipe</button>
          <Link to="/"><button>Back</button></Link>
        </div>
    </form>
    
    </div>
  )
}

export default AddRecipe