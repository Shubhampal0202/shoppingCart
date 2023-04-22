import React from "react";

function ProductCart({ item, addToCardHandler }) {
  return (
    <>
      <div className="product">
        <img src={item.imgSrc} alt={item.name} />
        <p>{item.name}</p>
        <h4>${item.price}</h4>
        <button onClick={() => addToCardHandler({...item,quantity:1})}>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductCart;
