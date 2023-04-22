import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
function Header() {
  const { cartItems } = useSelector((state) => state);
  return (
    <nav>
      <h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiVjRVt6321XOkELohL9nC5E6j8fQZcQ_gZ9pdedIwC_Sth7R1Zlpj9BOos_3INpHuYA&usqp=CAU"
          alt="logo"
        />
      </h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          <FiShoppingCart />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
