import { Link } from "react-router-dom";

function ItemCard(props) {

  // CSS
  
  const itemCardCSS = {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-around",
    backgroundColor: props.bgColor,
    paddingRight: "20px",
  }
    
  return (
    
      <div style={itemCardCSS}>
        <Link to={`/recipes/${props.id}`}>
        <img src={props.image} alt="foto-comida" width="150px" height="150px"/>
        </Link>
        <p>{props.name}</p>
        <p>{props.calories}</p>
        <p>{props.servings}</p>
        <button onClick={() => props.handleDeleteItemCard(props.index)}>Delete</button>
      </div>
    
  );
}

export default ItemCard;
