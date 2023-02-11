import { urlFor } from "@/sanity";
import { type } from "os";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  decreaseItemsCount,
  removeFromBasket,
  selectBasketItems,
} from "@/redux/basketSlice";
type Props = {
  items: Product[];
  id: string;
};
function CheckoutProduct({ items, id }: Props) {
  const dispatch = useDispatch();
  const Items = useSelector(selectBasketItems);
  const removeFromCartHandle = () => {
    items.map((item) => {
      toast.error(`Removed ${item.title} from basket`);

      return dispatch(removeFromBasket(item));
    });
  };

  return (
    <div className="w-[90%] flex flex-col  mx-auto justify-center items-center">
      <div className="w-full px-2  space-y-5  flex justify-between">
        <div className="flex  items-start justify-center space-x-4">
          <img
            className="w-28 h-28 sm:w-44 sm:h-44 object-cover rounded-xl drop-shadow-xl"
            src={urlFor(items[0].image[0]).url()}
            alt=""
          />

          <p className="italic font-light text-[16px] sm:text-[22px] lg:text-[25px] pt-4">
            {items[0].title}
          </p>
        </div>

        <div className="flex items-center space-x-4 justify-center">
          <div className=" flex flex-col items-end space-y-5">
            <div className="flex flex-col sm:flex-row items-center justify-center ">
              <span className="font-bold  text-[18px] px-4">
                Quantity: {items.map((item) => item.quantity)}
              </span>
              <button
                onClick={removeFromCartHandle}
                className="bg-[#006400] rounded-lg text-white text-[20px] px-4 py-0   "
              >
                Remove
              </button>
            </div>
            <p className="text-[22px]">
              Subtotal:{(items[0].price * items[0].quantity).toFixed(2)}$
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
}

export default CheckoutProduct;
