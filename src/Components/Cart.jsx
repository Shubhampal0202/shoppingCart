import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const { cartItems, shipping, subTotal, tax, total } = useSelector(
    (store) => store
  );
  const dispatch = useDispatch();
  console.log("cartItems ", cartItems);

  const increment = (id) => {
    dispatch({ type: "increment", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculatePrice" });
  };

  const deleteItem = (id) => {
    dispatch({ type: "deleteItem", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increment={increment}
              decrement={decrement}
              deleteItem={deleteItem}
            />
          ))
        ) : (
          <h1>No Items yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
}

export default Cart;
