import React from "react";

function Footer() {
  return (
    <div className="flex w-full px-8 sm:px-0 flex-col space-y-20 items-center justify-center  mt-28 sm:mt-48  sm:max-w-[624px] lg:max-w-[960px] xl:max-w-[1296px]   mx-auto">
      <div className="">
        <div className="flex flex-col   lg:flex-row flex-shrink-0">
          <img
            src="../../avacado.jpg"
            className="object-cover w-72 mx-auto  sm:w-[600px] sm:h-[300px]"
            alt=""
          />
          <div className="flex flex-col items-center text-center sm:text-left sm:items-end  justify-between px-2 w-fit pt-10 lg:pt-0 lg:pl-8">
            <div className="space-y-8">
              <h3 className="text-xl text-blue-800 tracking-wide">
                Maecenas nulla neque
              </h3>
              <p>
                Redistributing this template as a downloadable ZIP file on any
                template collection site is strictly prohibited. You will need
                to talk to us for additional permissions about our templates.
                Thank you. Redistributing this template as a downloadable.
              </p>
            </div>
            <div className="text-left lg:text-right">
              <button className="px-8 text-gray-600  flex-shrink-0 w-44 mt-8 lg:mt-0 py-2 border-[1px] border-gray-400 hover:bg-gray-400 hover:text-white ">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-6 text-center">
        Copyright © 2020 Simple House | Design: TemplateMo
      </div>
    </div>
  );
}

export default Footer;
