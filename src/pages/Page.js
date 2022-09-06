import { Routes, Route } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import "./Page.css"

import Banner from "../components/Banner";
import PageNotFound from "../components/PageNotFound";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ConsoleInput from "../components/ConsoleInput";

import Bio from "./Bio";
import Expirience from "./Expirience";
import Projects from "./Projects";
import Contact from "./Contact";
import ILove from "./ILove";

const Page = () => {

  return (
      <Container maxW="container.sm" pt={10}>
        <Banner />
        <Footer />
        <Menu />
        <Routes>
          <Route exact path="/" />
          <Route exact path="/bio"  element={ <Bio />} />
          <Route exact path="/expirience" element={<Expirience />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/i/love" element={<ILove />} />
        </Routes>
        <ConsoleInput />
      </Container>
  );
};
export default Page;
