import Products from "@/components/Products";
import { selectBasketItems } from "@/redux/basketSlice";
import React, { useState, useEffect } from "react";
import CheckoutProduct from "@/components/CheckoutProduct";
import { useSelector } from "react-redux";
import Landing from "@/components/Landing";
import { useRouter } from "next/router";

function Checkout() {
  const router = useRouter();
  const items = useSelector(selectBasketItems);
  const [total, setTotal] = useState(0);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const handleClick = () => {
    router.push(`/`, undefined, { scroll: false });
  };
  return (
    <div className="flex flex-col   mx-auto">
      <Landing />
      <div className="flex flex-col ">
        <div className="space-y-5  mt-20">
          <div className="flex  items-center justify-center">
            {items.length == 0 && (
              <div className="flex  items-center justify-center flex-col space-y-4">
                <p className="font-light text-[40px]"> Your Cart is Empty!!</p>
                <button
                  onClick={handleClick}
                  className="text-white  rounded-lg bg-[#006400] px-8 py-4"
                >
                  Go Back To Shop
                </button>
              </div>
            )}
          </div>

          {items.length > 0 && groupedItemsInBasket
            ? Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <CheckoutProduct key={key} items={items} id={key} />
              ))
            : []}
        </div>
        <div className="text-right text-[30px] pb-4 mt-10 w-[90%] mx-auto">
          {items.length > 0 && (
            <p className="">
              Total:
              <span className="">
                {items
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </span>
              $
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto pt-10 pb-6 text-center">
        Copyright © 2020 Simple House | Design: TemplateMo
      </div>
    </div>
  );
}

export default Checkout;
