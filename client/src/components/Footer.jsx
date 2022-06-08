import React from "react";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-[#6c3a1a]  text-sm text-center">Descentralize the world</p>
      <p className="text-[#6c3a1a]  text-sm text-center font-medium mt-2">info@davidwebdesigns.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-[#6c3a1a]  mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-[#6c3a1a]  text-left text-xs">@DavidWebDesigns 2022</p>
      <p className="text-[#6c3a1a]  text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;