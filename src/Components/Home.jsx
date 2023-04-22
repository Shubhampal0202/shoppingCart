import React from "react";
import ProductCart from "./ProductCart";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
  const img3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7YmOK86Q01Sn0xxu_eCXAv643s7_Mkrmt2ZUSjCikeHdw65ZJQpRalTJij871t-47t4&usqp=CAU";
  const img4 =
    "https://media.istockphoto.com/id/1364620309/photo/iphone-13-pro.jpg?s=612x612&w=0&k=20&c=2h5Q46wh-eRyPwh4KKnJhCKFWqcd2ltgv9tdaULDdbc=";
  const img5 =
    "https://img.freepik.com/premium-psd/realistic-smart-watch-mockup_165789-534.jpg";

  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },

    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "T-shirt",
      price: 250,
      imgSrc: img3,
      id: "zvcxzvisfsifhsidhfdsh",
    },
    {
      name: "i-phone",
      price: 10000,
      imgSrc: img4,
      id: "dsuhfueryeuwfyeiusfhus",
    },
    {
      name: "Smart Watch ",
      price: 700,
      imgSrc: img5,
      id: "mojkojouiyugvhvgxass",
    },
  ];

  const addToCardHandler = (val) => {
    dispatch({ type: "Add_product", payload: val });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((item) => (
        <ProductCart
          key={item.id}
          item={item}
          addToCardHandler={addToCardHandler}
        />
      ))}
    </div>
  );
}

export default Home;
