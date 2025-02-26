import React from "react";

function ItemCard() {
  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "space-between",
      }}
    >
      <img
        src="https://randomuser.me/api/portraits/men/44.jpg"
        alt=""
        width="200px"
        height="200px"
        style={{ textAlign: "center", margin: "5px" }}
      />

      <p>Chocolate</p>
      <p>Patata</p>
      <p>Banana</p>
      <p>Nueces</p>
    </div>
  );
}

export default ItemCard;
