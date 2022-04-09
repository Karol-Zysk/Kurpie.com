import { useState } from "react";
import { Hero } from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Hero />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default Home;
