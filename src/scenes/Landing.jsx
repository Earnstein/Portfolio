import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcon from "../components/SocialMediaIcon";
import Animation from "../components/Animation";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:min-h-screen py-10 container mx-auto"
    >
      {/* IMAGE SECTION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-8 group">
        {isAboveMediumScreens ? (
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          >
            <Animation />
          </motion.div>
        ) : (
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}>
            <Animation />
          </motion.div>
          
        )}
      </div>
      {/* main section*/}
      <div className="z-30 basis-2/5 mt-0 md:mt-4">
        {/*headings*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair z-10 text-center md:text-start">
            I&apos;m Damilola {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
                xs:before:content-brush before:absolute before:-left-[40px] before:mt-6 before:-top-[150px]
                before:z-[-1] wide:text-[60px]"
            >
              Bakare
            </span>
          </h1>
          <p className="sm:text-xl mt-4 sm:mt-12 mb-4 md:mt-6 text-center md:text-start font-playfair">
            A Full Stack Developer.
          </p>
        </motion.div>

        {/*call to actions*/}
        <motion.div
          className="flex mt-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="font-playfair bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7
          font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <button
              className="bg-deep-blue hover:text-red transition
           duration-500 max-[320px]:px-6 w-full h-full flex items-center justify-center font-playfair px-10"
            >
              Let&apos;s talk.
            </button>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcon />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
