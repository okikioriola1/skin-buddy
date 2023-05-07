import React from "react";
import { motion } from "framer-motion";
import SkinLogo from "../../assets/skin-logo.png";

const Contact = ({selectedPage, setSelectedPage}) => {
  return (
    <section id="contact" className="min-h-full w-full">
      <motion.div
        onViewportEnter={() => setSelectedPage("contact")}
        className="relative w-11/12"
      >
        <div className="before:absolute before:-left-20 before:z-[-1] md:before:content-contactBg">
          <div className="md:flex items-center justify-end gap-8 mt-5">
            <div className="md:flex items-center flex-col justify-center md:w-[650px]">
              <h1 className="text-center text-4xl font-ibarraRealNova">Contact Us</h1>
              <p className="text-center text-xl text-[#3e3e3e] py-6">
                If you have any inquiries about our products or services, or if
                you need help selecting the right skincare routine for your skin
                type, please do not hesitate to contact us. Our customer support
                team is available to assist you and provide you with
                personalized guidance to help you achieve your skincare goals.
              </p>
              <div>
              <form
              target="_blank"
              
            >
              <input
                className=""
                type="text"
                placeholder="Enter your question"

              />


            </form>

              </div>
            </div>
            <div>
              <img src={SkinLogo} alt="logo" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
