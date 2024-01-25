import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import { projects } from "../constants";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.2 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Project = ({ title, image }) => {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.5 }}
      variants={projectVariants}
      className="relative mb-1 sm:mb-0 "
    >
      <div
        className="absolute inset-0 h-full w-full opacity-0
             hover:opacity-90 transition-all duration-500 ease-linear bg-grey
             z-30 flex flex-col justify-center items-center px-2 text-sm text-center
             font-palanquin
             "
      >
        <h2 className="title text-black font-playfair"> {title}</h2>
        <p className="mt-2 text-black  text-center">
          stack - React, tailwind, express , mongodb
        </p>
      </div>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </motion.div>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="sm:py-28 py-8 space-y-8">
      <motion.div
        className="md:w-1/2 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <h2
            className="title
             uppercase"
          >
            my <span className="text-red"> pro</span>jects
          </h2>
          <LineGradient
            width="w-3/4"
            styles="transition-all duration-500 hover:w-[40%]"
          />
          <p className="text-center max-w-xl font-playfair text-sm sm:text-xl">
            Uncover some of my most exciting projects.
          </p>
        </div>
      </motion.div>
      {/*PROJECTS*/}
      <div className="flex justify-center items-center mx-auto max-w-5xl">
        <motion.div
          className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/*PROJECTS*/}
          {projects.map((p) => (
            <Project key={p.title} title={p.title} image={p.image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
