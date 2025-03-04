import { Link } from "react-router-dom";

function ItemCard(props) {

    
  return (
    
      <div id="itemCardCSS" style={{backgroundColor: props.bgColor}}>
        <Link to={`/recipes/${props.id}`}>
        <img src={props.image} alt="foto-comida" width="120px" height="120px" style={{marginTop: "5px"}}/>
        </Link>
        <p>{props.name}</p>
        <p>{props.calories}</p>
        <p>{props.servings}</p>
        <button id="btnDelete" onClick={() => props.handleDeleteItemCard(props.index)}>Delete</button>
      </div>
    
  );
}

export default ItemCard;
