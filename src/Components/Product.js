import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(add(product));
    toast.success("Item added to cart!");
  };

  const removeItem = () => {
    dispatch(remove(product.id));
    toast.error("Item removed from cart!");
  };

  return (
    <div className="group hover:scale-110 transition-all duration-500 ease-in-out flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {product.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
      <div>
        <p className="text-[10px] w-40 text-gray-400 font-normal text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img
          className="w-full h-full"
          src={product.image}
          alt="Product Img"
        ></img>
      </div>
      <div className="flex justify-evenly gap-12 items-center  w-full mt-5 mb-5">
        <div>
          <p className="text-orange-600 font-serif font-extrabold">
            $ {product.price}
          </p>
        </div>

        {/* Here some is a method in JS `The some method in JavaScript is used to test whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value - true if at least one element satisfies the condition, and false otherwise.` */}
        {/* iska matlab hai ki apke cart me esi item hai jo item home products mai bhi hai too apko remove item ka btn batana padega sahi hoga too, nai to add karneka btn */}

        {cart.some((item) => item.id === product.id) ? (
          <div>
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in-out text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={removeItem}
            >
              Remove Item
            </button>
          </div>
        ) : (
          <div>
            <button
              className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in-out text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
              onClick={addItem}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
