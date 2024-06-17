import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold">DB</h1>
      </div>
      <div className="flex justify-center gap-6 md:gap-8">
        <SocialMediaIcon />
      </div>
      <p className="mx-auto text-sm mt-6 max-w-md text-center leading-relaxed text-gray-500">
        Copyright &copy; {currentYear}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
