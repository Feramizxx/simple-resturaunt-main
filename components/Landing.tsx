import React from "react";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";
function Landing() {
  const items = useSelector(selectBasketItems);
  return (
    <div>
      <div className="relative h-[70vh]">
        <img
          className="w-full absolute  object-cover h-[70vh]"
          src="../../Landing.jpg"
          alt="landing"
        />

        <div className="absolute space-y-4 bottom-4 left-0 px-4 lg:px-10 py-4 flex flex-col sm:flex-row sm:justify-between w-[100%] mx-auto  sm:items-center ">
          <div className="flex  flex-shrink-0 items-start sm:items-center sm:justify-center justify-start space-x-4  ">
            <img className="w-20 h-20" src="../../Logo.png" alt="logo" />
            <div className="flex flex-col shrink-0">
              <span className="text-white font-bold text-[40px]">
                Simple House
              </span>
              <span className="text-white font-light text-[20px]">
                Centre of delicious meals!!
              </span>
            </div>
          </div>

          <div className="space-x-8 text-[18px] w-full h-8 flex justify-end  sm:w-80 text-right   text-white">
            <Link
              className="hover:underline underline-offset-8"
              href="/"
              scroll={false}
            >
              Home
            </Link>
            <Link
              className="hover:underline underline-offset-8"
              href="/about"
              scroll={false}
            >
              About
            </Link>
            <Link
              className="hover:underline underline-offset-8"
              href="/checkout"
              scroll={false}
            >
              <div className="relative">
                {items.length > 0 && (
                  <span className="absolute bg-[#006400] rounded-full  h-4 w-4 text-[10px] -top-2 flex items-center justify-center -right-2">
                    {items.length}
                  </span>
                )} 

                <ShoppingCartIcon className="w-6  h-6" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
