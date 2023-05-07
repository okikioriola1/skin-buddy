import React from "react";
import "./journal.css";
import { motion } from "framer-motion";
import Journals from "./journals";
import JournalMainImg from '../../assets/journal-img.png'

const JournalInfo = [
  {
    title: "Get Daily Reminders",
    description:
      "At SkinBuddy, we are dedicated to helping you achieve your best skin possible. One way we do this is by providing convenient and helpful reminders to ensure that you never miss the optimal time to use your skincare products. Our reminders are designed to help you stay on track with your skincare routine, so you can maximize the benefits of your products and keep your skin healthy and radiant. Whether it's a simple email notification or a more personalized approach, we are committed to providing you with the support you need to achieve your skincare goals.",
  },
  {

      title:"We make your daily routine more sustainable with products",
      description: "By offering a range of eco-friendly and sustainable skincare products, we are committed to helping you make a positive impact on the environment while maintaining a healthy skincare routine. Our products are made from natural, non-toxic ingredients that are gentle on your skin and safe for the planet. From packaging made with recyclable materials to our commitment to reducing waste, we strive to make sustainability a top priority in everything we do."
    }
];
const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, duration: 1},
    },
  };

const Journal = ({ selectedPage, setSelectedPage }) => {
  return (
    <section id="journal" className="gap-16 bg-gray-20 py-10 mt-5 md:pb-0">
      <motion.div onViewportEnter={() => setSelectedPage("journal")}>
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5 md:w-9/12 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        
        >
            {JournalInfo.map((item,index)=>(
                <Journals
                key={index}
                title={item?.title}
                description={item?.description}
                />
            ))}
        </motion.div>
      </motion.div>
      <div className="items-center w-100 h-100 md:mt-16 md:flex">
        <img src={JournalMainImg} alt="journal-img"/>
        </div>
    </section>
  );
};

export default Journal;
