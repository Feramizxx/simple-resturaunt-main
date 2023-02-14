import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { selectBasketItems } from "../redux/basketSlice";
import { useSelector } from "react-redux";

function Basket() {
  const items = useSelector(selectBasketItems);
  return (
    <Link href="/checkout" scroll={false}>
   {items.length>0 &&    <div
        className="fixed bottom-10 right-10 h-16 w-16 cursor-pointer
    flex z-50 items-center justify-center rounded-full bg-gray-300 "
      >
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50 h-7 w-7 rounded-full items-center justify-center flex bg-gradient-to-r from-green-700 to-gray-500 text-[10px] text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </div>}
    </Link>
  );
}

export default Basket;
