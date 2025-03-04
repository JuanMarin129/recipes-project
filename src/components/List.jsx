import React from "react";
import ItemCard from "./ItemCard";

function List(props) {
    let bgColor;

    const handleDeleteItemCard = (index) => {
        let clone = props.listRecipes.slice(0);
        clone.splice(index, 1);
        props.setListRecipes(clone);
      };

  return (
    <div id="contenedorLista">
      {props.listRecipes.map((eachRecipe, index) => {
        eachRecipe.calories <= 300 ? (bgColor = "#F9A826" ) : (bgColor = "#FF6B6B");  // #F9A826 Naranja zanahoria | #FF6B6B rojo tomate
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
    </div>
  );
}

export default List;
