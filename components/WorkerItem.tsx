import { urlFor } from "../sanity";
import {BsFacebook,BsTwitter,BsYoutube,BsInstagram} from "react-icons/bs"


type Props = {
  worker: Worker;
};
function WorkerItem({ worker }: Props) {
  return (
    <div>
      <div className="flex  justify-center">
        <img className=" object-cover" src={urlFor(worker.image[0]).url()} alt="" />
        <div className="pl-4 pb-2">
          <div className="flex flex-col space-y-4 space-x">
            <h3 className="text-3xl text-blue-500 tracking-wide font-light">{worker.title}</h3>
            <p className="text-xl font-[300] text-purple-700 tracking-wide">{worker.duty}</p>
          </div>
          <div className="pt-10">
            <p className="text-gray-500 tracking-wide">
              Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio,
              sit amet accumsan odio.
            </p>
          </div>
          <div className="flex justify-start items-center space-x-5 pt-10">
            <BsFacebook className="socialIcon"/>
            <BsInstagram className="socialIcon"/>
            <BsTwitter className="socialIcon"/>
            <BsYoutube className="socialIcon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerItem;
