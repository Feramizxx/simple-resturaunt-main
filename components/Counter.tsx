import React from "react";
import { useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
} from "@/redux/basketSlice";
import { useDispatch } from "react-redux";
import { decreaseItemsCount } from "@/redux/basketSlice";
import toast from "react-hot-toast"
type Props = {
  product: Product;
  id: string;
  quantity: number
};

function Counter({ product, id,quantity }: Props) {
  // const [producItems, setProducItems] = useState({ ...product, quantity: 0 });
 
  const dispatch = useDispatch();
  const items = useSelector(selectBasketItems);
  const currentIndex =  items.findIndex((item) => item._id == id);
  const handleAddToCart =   () => {
     dispatch(addToBasket({ ...product, quantity }));
     toast.success(`Added a ${product.title} to basket`, {
      duration: 1500,
      position: 'top-center'
     })
    //  console.log(currentIndex
  };
  

  const handleRemoveFromCart = () => {
    dispatch(decreaseItemsCount(product));
    toast.error(`removed a ${product.title} from basket`, {
      duration: 1500,
      position: 'top-center'
     })
  };
  return (
    <div className="">
      <button
        onClick={handleAddToCart}
        className="bg-[#006400] rounded-xl px-4 text-white text-[18px]"
      >
        +
      </button>
      <span className="px-2 font-bold text-[20px]">{currentIndex==-1? '0': items[currentIndex].quantity}</span>
      <button
      disabled={currentIndex==-1}
        onClick={handleRemoveFromCart}
        className="bg-[#006400] rounded-xl disabled:opacity-60 px-4 text-white text-[18px]"
      >
        -
      </button>
    </div>
  );
}

export default Counter;
