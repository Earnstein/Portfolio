import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { skillsImg } from "../assets/images";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="sm:pt-24 sm:pb-24 py-8">
      {/* HEADER AND IMAGE SECTION */}
      <div
        className="md:flex md:justify-between md:flex-row-reverse md:gap-16
        mt-16"
      >
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p
            className="title
                mb-4 uppercase"
          >
            my <span className="text-red"> skills</span>
          </p>
          <LineGradient
            width="w-1/3"
          />
          <p className="mt-4 max-w-sm font-montserrat italic">
          I&apos;m a seasoned developer with exprience in python and javascript. Expertise in frameworks like react, django, fastAPI, and Node.js.
          </p>
        </motion.div>

        <div className="mt-8 md:mt-0">
          {isAboveMediumScreens ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="relative z-0 ml-20 before:absolute 
                 before:mt-4 before:-top-10 before:-left-10 
                 before:w-full before:h-full 
                 before:border-2 before:border-blue 
                 before:z-[-1]
                 "
            >
              <img className="z-10" src={skillsImg} alt="skills" />
            </motion.div>
          ) : (
            <img className="z-10" src={skillsImg} alt="skills" />
          )}
        </div>
      </div>
      {/*SKILLLS*/}
      <div className="md:flex md:justify-between mt-2 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative z-10">
            <h2 className="title ">01</h2>
            <p
              className="font-semibold
                    font-playfair text-3xl mt-4"
            >
              Python
            </p>
            <div
              className="w-1/2 md:w-3/4 h-32 bg-blue
                absolute right-4 top-0 z-[-1]"
            />

            <p className="max-w-sm mt-4 sm:mt-6 font-montserrat italic text-sm">
            Python is my go-to language, and I&apos;ve mastered frameworks like Django, FastAPI, and Flask to build robust web applications.
            </p>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative z-10">
            <h2 className="title">02</h2>
            <p
              className="font-semibold
                    font-playfair text-3xl mt-4"
            >
              Javascript
            </p>
            <div
              className="w-1/2 md:w-3/4 h-32 bg-yellow
                absolute right-0 top-0 z-[-1]"
            />
            <p className="max-w-sm mt-4 sm:mt-6 font-montserrat italic text-sm">
            My JavaScript expertise spans React, Express, and Node.js, enabling me to create dynamic and responsive user experiences.
            </p>
          </div>
        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative z-10">
            <h2 className="title">03</h2>
            <p
              className="font-semibold
                    font-playfair text-3xl mt-4"
            >
              Databases
            </p>
            <div
              className="w-1/2 md:w-3/4 h-32 bg-red
                absolute right-0 top-0 z-[-1]"
            />

            <p className="max-w-sm mt-4 sm:mt-6 font-montserrat italic text-sm">
            I&apos;m proficient in both SQL and NoSQL databases, ensuring scalable solutions for different project needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
