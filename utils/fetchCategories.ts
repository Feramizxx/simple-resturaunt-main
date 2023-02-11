export const fetchCategories = async () => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories/`
  );
  const data = await result.json();
  const categories: Category[] = data.categories;
  return categories;
};
