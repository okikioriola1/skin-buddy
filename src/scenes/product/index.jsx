import React from "react";
import { motion } from "framer-motion";
import "./product.css";
import image1 from "../../assets/cream1.png";
import image2 from "../../assets/cream2.png";
import image3 from "../../assets/cream3.png";
import image4 from "../../assets/cream4.png";
import image5 from "../../assets/cream5.png";
import image6 from "../../assets/cream6.png";
import image7 from "../../assets/cream7.png";
import image8 from "../../assets/cream8.png";
import ProductCard from "./ProductCard";

const Product = ({ selectedPage, setSelectedPage }) => {
  const products = [
    {
      name: "Vitruvian Man Toner",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image1,
    },
    {
      name: "Adam Nourishing Oil ",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image2,
    },
    {
      name: "Vitruvian Man Toner",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image3,
    },
    {
      name: "Adam Nourishing Oil ",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image4,
    },
    {
      name: "Vitruvian Man Toner",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image5,
    },
    {
      name: "Adam Nourishing Oil ",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image6,
    },
    {
      name: "Vitruvian Man Toner",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image7,
    },
    {
      name: "Adam Nourishing Oil ",
      description:
        "The serum is made with powerful blend of natural ingredients that helps to nourish and hydrate your skin. ",
      price: "from £10 ",
      image: image8,
    },
  ];

  return (
    <section id="product" className="min-h-full w-11/12 mx-5">
      <motion.div onViewportEnter={() => setSelectedPage("products")}>
        <h1 className="text-center mt-14 font-ibarraRealNova text-2xl">
          Your Personalized Products
        </h1>

        <div className="w-5/6 h-full sm:flex md:flex items-center justify-between gap-8 mt-12 flex-wrap m-auto">
          {products.map((item,index)=>(
            <ProductCard
              key={index}
              name={item?.name}
              description={item?.description}
              price={item?.price}
              image={item?.image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Product;
