import { motion } from "framer-motion";
import { contact } from "../assets/images";
import ContactForm from "../components/ContactForm";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const Contact = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="contact" className="md:flex md:gap-4 md:py-40 py-8">
      {/* Image Section */}
      <div className="mt-8 md:order-1 md:mt-0">
        {isAboveMediumScreens ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="title uppercase mb-4 md:mt-0">
            Get in <span className="text-yellow"> touch</span>
            </p>
            <LineGradient width="w-3/4" />
            <img className="z-10 mt-4" src={contact} alt="skills" />
          </motion.div>
        ) : (
          <>
            <p className="title uppercase mb-4 md:mt-0">
              Get in <span className="text-yellow"> touch</span>
            </p>
            <LineGradient width="w-3/4" />
            <img className="z-10 mt-4" src={contact} alt="skills" />
          </>
        )}
      </div>

      {/* Form Section */}
      <div className="flex flex-1 md:order-2 flex-col md:basis-1/2 px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="sm:pt-24 pt-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
