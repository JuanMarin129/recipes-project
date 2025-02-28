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
    <>
      {props.listRecipes.map((eachRecipe, index) => {
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
