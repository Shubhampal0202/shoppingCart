const initialState = {
  cartItems: [],
  shipping: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};
console.log("before reducer");
export const reducer = (state = initialState, action) => {
  console.log("inside reducer ", state);
  let newArr = [];
  switch (action.type) {
    case "Add_product":
      let item = action.payload;
      console.log("item ", item);
      let isItemExist = state.cartItems.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
        return { ...state };
      } else {
        state.cartItems.push(item);
        return { ...state };
      }

    case "increment":
      const incrId = action.payload;
      newArr = state.cartItems.map((item) => {
        if (item.id === incrId) {
          item.quantity += 1;
        }
        return item;
      });
      return { ...state, cartItems: newArr };

    case "decrement":
      const decrId = action.payload;
      newArr = state.cartItems
        .map((item) => {
          if (item.id === decrId) {
            item.quantity -= 1;
          }
          return item;
        })
        .filter((i) => {
          return i.quantity !== 0;
        });
      return { ...state, cartItems: newArr };

    case "deleteItem":
      const id = action.payload;
      const filteredArr = state.cartItems.filter((item) => {
        return item.id !== id;
      });
      return { ...state, cartItems: filteredArr };

    case "calculatePrice":
      let sum = 0;
      state.cartItems.forEach((i) => {
        sum += i.price * i.quantity;
      });
      state.subTotal = sum;
      if (state.cartItems.length > 0) {
        state.shipping = state.subTotal > 1000 ? 0 : 200;
      } else {
        state.shipping = 0;
      }
      state.tax = Math.floor(state.subTotal * 0.18);
      state.total = state.subTotal + state.shipping + state.tax;
      return { ...state };

    default:
      return state;
  }
};
