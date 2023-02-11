import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import Landing from "../components/Landing";
import Products from "@/components/Products";
import { fetchCategories } from "@/utils/fetchCategories";
import { GetServerSideProps } from "next";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { fetchProducts } from "@/utils/fetchProducts";
import Basket from "@/components/Basket";
import { useRouter } from "next/router";
import { fetchWorkers } from "@/utils/fetchWorkers";
import Footer from "@/components/Footer";
type Props = {
  categories: Category[];
  products: Product[];
};
export default function Home({ categories, products }: Props) {
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
        <Footer/>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const categories: Category[] = await fetchCategories();
  const products: Product[] = await fetchProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};
