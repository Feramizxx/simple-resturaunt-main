import Landing from "../components/Landing";
import WorkerItem from "../components/WorkerItem";
import { fetchWorkers } from "../utils/fetchWorkers";
import { GetStaticProps } from "next";

type Props = {
  workers: Worker[];
};
const About = ({ workers }: Props) => {
  return (
    <div className="">
      <Landing />
      <div className="px-4 flex flex-col w-full lg:w-[90%] mx-auto items-center justify-center">
        <div className="flex flex-col text-center space-y-6 items-center justify-center mt-16">
          <h3 className="text-[28px]">About Simple House</h3>
          <p className="px-20 w-full lg:w-[900px] text-gray-500 text-[20px]">
            This is about page of simple house template. You can modify and use
            this HTML template for your website. Total 3 HTML pages included in
            this template. Header image has a parallax effect.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-10 items-center justify-center">
          {workers
            ? workers.map((worker) => {
                return <WorkerItem key={worker._id} worker={worker} />;
              })
            : []}
        </div>
      </div>

      <div className="pb-6 text-center pt-20">
        Copyright © 2020 Simple House | Design: TemplateMo
      </div>
    </div>
  );
};

export default About;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const workers: Worker[] = await fetchWorkers();
  return {
    props: { workers },
  };
};
