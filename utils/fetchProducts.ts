export const fetchProducts = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  );
  const data = await result.json();

  const products: Product[] = data.products;
  return products;
};
