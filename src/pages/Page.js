import { Routes, Route } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Console from "../components/Console";


import Menu from "./Menu";
import Bio from "./Bio";
import ILove from "./ILove";
import Projects from "./Projects";
import Posts from "./Posts";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

const Page = () => {

  return (
      <Container maxW="container.sm" pt={10}>
        <Banner />
        <Footer />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/bio"  element={ <Bio />} />
          <Route exact path="/i/love" element={<ILove />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <Console />
      </Container>
  );
};
export default Page;
