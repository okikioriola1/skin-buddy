import { useState } from "react";
import Contact from "./scenes/contact";
import Home from "./scenes/home";
import Journal from "./scenes/journal";
import Navbar from "./scenes/navbar";
import Product from "./scenes/product";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Journal selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Product selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Contact selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
}

export default App;
