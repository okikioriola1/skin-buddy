import React from 'react'
import './journal.css'
import { motion } from "framer-motion";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible:{opacity:1, scale:1},
}

const Journals = ({title, description}) => {
  return (
    <motion.div className='mt-5 relative basis-3/5 rounded-md px-5 py-16 '
    variants={childVariant}
    >
        <h4 className='text-4xl font-ibarraRealNova font-bold'>{title}</h4>
        <p className='text-xs font-light leading-6 mt-5 after:absolute after:-bottom-44 after:right-3 md:after:content-journalBg'>{description}</p>



    </motion.div>
  )
}

export default Journals