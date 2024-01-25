import SocialMediaIcon from "../components/SocialMediaIcon";

const Footer = () => {
    const date = new Date()
  return (
    <footer className="bg-red py-4">
      <div className="w-4/5 mx-auto">
        <SocialMediaIcon className="my-0" />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair mt-2 font-semibold text-xl sm:text-2xl text-white">
            DAMILOLA BAKARE
          </p>
          <p className="font-playfair text-sm sm:text-md text-white">
            <span className="text-yellow">©</span>{date.getFullYear()} EARNSTEIN. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;