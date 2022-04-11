import { useState } from "react";
import Discover from "../components/Discover/Discover";
import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import {
  HomeVariables,
  HomeVariablesTwo,
  HomeVariablesThree,
  HomeVariablesFour,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
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
      <InfoSection {...HomeVariables} />
      <InfoSection {...HomeVariablesTwo} />
      <InfoSection {...HomeVariablesThree} />
      <InfoSection {...HomeVariablesFour} />
      <Discover />
      <Footer />
    </>
  );
};

export default Home;
