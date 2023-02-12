import Head from "next/head";
import React from "react";
import Landing from "../components/Landing";
import Products from "@/components/Products";
import { fetchCategories } from "@/utils/fetchCategories";
import { fetchProducts } from "@/utils/fetchProducts";
import Basket from "@/components/Basket";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

type Props = {
  categories: Category[];
  products: Product[];
};

export function Home({ categories, products }: Props) {
  return (
    <>
      <Head>
        <title>Simple-House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Landing />
        <Basket />
        <Products products={products} categories={categories} />
        <Footer />
      </div>
    </>
  );
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
export const getStaticProps = async () => {
  const categories: Category[] = await fetchCategories();
  const products: Product[] = await fetchProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};
