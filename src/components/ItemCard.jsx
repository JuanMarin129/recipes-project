import { Link } from "react-router-dom";

function ItemCard(props) {
    
  return (
    <>
    <Link to="/recipes/:recipeId">
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          justifyContent: "space-between",
          backgroundColor: props.bgColor,
        }}
      >
        <img
          src={props.image}
          alt=""
          width="200px"
          height="200px"
          style={{ textAlign: "center", margin: "5px" }}
        />

        <p>{props.name}</p>
        <p>{props.calories}</p>
        <p>{props.servings}</p>
        <button onClick={() => props.handleDeleteItemCard(props.index)}>Delete</button>
      </div>
      </Link>
    </>
  );
}

export default ItemCard;
