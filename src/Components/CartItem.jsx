import React from "react";
import { AiFillDelete } from "react-icons/ai";
function CartItem({ item, increment, decrement, deleteItem }) {
  return (
    <>
      <div className="cartItem">
        <div>
          <img src={item.imgSrc} alt="Item" />
        </div>

        <article>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </article>

        <div>
          <button onClick={() => decrement(item.id)}>-</button>
          <p>{item.quantity}</p>
          <button onClick={() => increment(item.id)}>+</button>
        </div>

        <div>
          <AiFillDelete onClick={() => deleteItem(item.id)} />
        </div>
      </div>
    </>
  );
}

export default CartItem;
