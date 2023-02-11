export const fetchWorkers = async () => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getWorkers`
  );
  const res = await data.json();
  const workers: Worker[] = res.workers;
  return workers;
};
