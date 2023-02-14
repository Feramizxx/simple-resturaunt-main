import Head from "next/head";
import Landing from "../components/Landing";
import Products from "../components/Products";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";
import Basket from "../components/Basket";
import Footer from "../components/Footer";
import { GetServerSideProps } from "next";


type Props = {
  categories: Category[];
  products: Product[];
};

const Home=({ categories, products }: Props)=> {
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

export default Home;
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories: Category[] = await fetchCategories();
  const products: Product[] = await fetchProducts();

  return {
    props: {
      categories,
      products,
    },
  };
};
