import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // here state is the current state of the cart  & actions is the payload which we're sending in product.js function addItem in dispatch(add(product)) line 11 & 12 in product.js
    add: (state, actions) => {
      state.push(actions.payload); // here actions.payload is the product object which we're sending in product.js function addItem in dispatch(add(product)) line 11 & 12 in product.js
    },
    // The below explanation is given at the end of this file
    remove: (state, actions) => {
      return state.filter((item) => item.id !== actions.payload); // here actions.payload is the product id which we're sending in product.js function removeItem in dispatch(remove(product.id)) line 19 & 20 in product.js  & item.id is the id of the product which is already in the cart
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

/*
The remove function in the CartSlice.js file is responsible for removing an item from the cart state. Let's break down the code:

Here's what each part of the code does:

The remove function takes two parameters: state and actions. The state parameter represents the current state of the cart, while the actions parameter contains the payload, which in this case is the product ID of the item to be removed.

The filter method is used on the state array to create a new array that only includes items that meet a certain condition. In this case, the condition is that the id of each item in the state array should not be equal to the actions.payload (product ID).

The arrow function (item) => item.id !== actions.payload is used as the condition for the filter method. It checks if the id of each item in the state array is not equal to the actions.payload (product ID). If the condition is true, the item is included in the new array; otherwise, it is filtered out.

Finally, the remove function returns the new filtered array, which represents the updated state of the cart with the specified item removed.

To provide some context, it seems that this remove function is used in conjunction with a dispatch function in the product.js file. When the removeItem function is called with a product ID as an argument, it dispatches the remove action with the product ID as the payload. This action is then handled by the remove function in the CartSlice.js file, which removes the corresponding item from the cart state.
 */
