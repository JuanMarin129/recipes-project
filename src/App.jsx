import './App.css'
import React, { useState } from "react";
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ItemDetails from './pages/ItemDetails'
import NotFound from './pages/NotFound'
import About from './pages/About'
import AddRecipe from './pages/AddRecipe'
import allRecipes from "./assets/recipes.json";
import EditRecipe from './pages/EditRecipe';

function App() {
  const [listRecipes, setListRecipes] = useState(allRecipes);

  return (
    <>
    <Navbar />
    <div style={{paddingTop:"95px"}}>
    <Routes>
      <Route path = "/" element ={<HomePage 
      listRecipes = {listRecipes}
      setListRecipes = {setListRecipes}
      />}></Route>
      <Route path = "/recipes/:recipeId" element={<ItemDetails
      listRecipes = {listRecipes}
      setListRecipes = {setListRecipes}/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/add-recipe' element={<AddRecipe
      listRecipes = {listRecipes}
      setListRecipes = {setListRecipes}
      />}></Route>
      <Route path='/edit-recipe/:id' element={<EditRecipe
      listRecipes = {listRecipes}
      setListRecipes = {setListRecipes}
      />}></Route>


      <Route path = "*" element={<NotFound/>}></Route>
    </Routes>
    </div>
    
    <Footer />
    </>
  )
}

export default App
