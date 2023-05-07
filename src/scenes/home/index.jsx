import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import ActionButton from "../../shared/button/ActionButton";
import "./home.css";
import HeroImage from "../../assets/hero-img.png";

const Home = ({ selectedPage, setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="md:flex mx-auto w-5/6 items-center md:h-5/6"
        onViewportEnter={() => setSelectedPage("home")}
      >
        <motion.div
          className="mt-32 md:basis-2/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative z-1000000">
            <h1 className="font-ibarraRealNova text-5xl">
              Beautiful skin starts with healthy habits.
            </h1>
            <p className="text-xs mt-8 mb-5 leading-6">
              Your skin is the fingerprint of what is going on inside your body,
              and all skin conditions, from psoriasis to acne to aging, are the
              manifestations of your body's internal needs, including its
              nutritional needs.
            </p>
            <ActionButton name="Learn More" backgroundColor="bg-[#F9F9F9]" />
          </div>
        </motion.div>

        <div className="z-10 md:basis-3/5">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="before:absolute before:-top-44 before:-left-16 before:z-[1] md:before:content-leftHeroBg after:absolute after:-top-20 after:-right-20 md:after:content-rightHeroBg">
              <img className="md:mt-16 mt-32" src={HeroImage} alt="img-1" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
