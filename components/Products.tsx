import { Tab } from "@headlessui/react";
import ProductItem from "./ProductItem";

type Props = {
  categories: Category[];
  products: Product[];
};
function Products({ categories, products }: Props) {
  
  const showProduct = (category: number) => {
    return  products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => {
        return  <ProductItem quantity={0} key={product._id} product={product}  id={product._id} />;
      });
  };
  return (
    <div className="flex flex-col space-y-8 w-full items-center mt-16 pb-10  justify-center">
      <div className="flex flex-col space-y-8 justify-center items-center">
        <h2 className="font-Light text-[28px] sm:text-[32px]">Welcome to Simple House!!</h2>
        <p className="w-[70%] lg:w-[650px] text-[18px] tracking-wide text-center text-gray-5t00">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          provident distinctio, ut, omnis accusamus doloremque sapiente nam
          aspernatur voluptas quidem eaque inventore debitis? Mollitia
          architecto sapiente, rerum consectetur commodi voluptatem.
        </p>
      </div>

      <div className="">
        <Tab.Group>
          <Tab.List className="flex justify-center space-x-5 items-center">
            {categories ? categories.map((category) => {
              return (
                <Tab
                  key={category._id}
                  className="border-[1px] rounded-lg border-green-700 text-green-700 px-8 py-2  hover:bg-green-700 transition-all  hover:text-white"
                >
                  {category.title}
                </Tab>
              );
            }): []}
          </Tab.List>
          <Tab.Panels >
            <Tab.Panel className="tablePanel ">{showProduct(0)}</Tab.Panel>
            <Tab.Panel className="tablePanel ">{showProduct(1)}</Tab.Panel>
            <Tab.Panel className="tablePanel ">{showProduct(2)}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Products;
