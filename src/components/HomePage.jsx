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
            <div style={{border: "1px solid black", display:"flex", flexDirection:"row", textAlign: "center", justifyContent: "space-between"}}>
                <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" width = "200px" height="200px" style={{textAlign: "center", margin:"5px"}}/>
               
                    <p>Chocolate</p>
                    <p>Patata</p>
                    <p>Banana</p>
                    <p>Nueces</p>
      
            </div>    
        </div>
    )
}

export default HomePage
