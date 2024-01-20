import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  };
  return (
    <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500  mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img src={item.image} alt="Product Img"></img>
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-bold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">
            {item.description.split(" ").slice(0, 15).join(" ") + "..."}
          </h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg font-serif text-orange-600">
              $ {item.price}
            </p>
            <div
              className=" bg-orange-300 group hover:bg-orange-400 transition-transform duration-300 cursor-pointer rounded-lg p-3 mr-3"
              onClick={deleteItem}
            >
              <MdDeleteSweep />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
