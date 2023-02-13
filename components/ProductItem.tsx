import { urlFor } from "../sanity";
import React from "react";
import Counter from "./Counter";


type Props = {
  product: Product;
  id: string;
  quantity:number;
};
function ProductItem({ product,id,quantity }: Props) {
  return (
    <div className="mt-20">
      <div className="">
        <img
          className="object-cover w-72 h-72 rounded-xl"
          src={urlFor(product.image[0]).url()}
          alt=""
        />
        <div>

          <h2 className="text-[1.5rem] py-2 font-400 font-roboto">{product.title}</h2>
          <p className="w-[18rem] text-gray-500 italic ">
            Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus
            accumsan
          </p>
          <div className="flex w-72 px-2 py-4 items-center justify-between">
            <span className="text-[24px] text-[#006400]   font-[600]">
              {product.price.toFixed(2)}$
            </span>
            <div>
           
              {/* counter */}
              <Counter id={id}   product={product}  quantity={quantity}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
