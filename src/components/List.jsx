import React, { useState } from "react";
import ItemCard from "./ItemCard";
import allRecipes from "../assets/recipes.json";

function List() {
    const [listRecipes, setListRecipes] = useState(allRecipes);
    let bgColor;

    const handleDeleteItemCard = (index) => {
        let clone = listRecipes.slice(0);
        clone.splice(index, 1);
        setListRecipes(clone);
      };

  return (
    <>
      {listRecipes.map((eachRecipe, index) => {
        eachRecipe.calories <= 300 ? (bgColor = "green") : (bgColor = "orange");
        return <ItemCard 
        name = {eachRecipe.name}
        calories = {eachRecipe.calories}
        servings = {eachRecipe.servings}
        image = {eachRecipe.image}
        index = {index}
        bgColor = {bgColor}
        id = {eachRecipe.id}
        handleDeleteItemCard = {handleDeleteItemCard}
        />;
      })}
    </>
  );
}

export default List;
