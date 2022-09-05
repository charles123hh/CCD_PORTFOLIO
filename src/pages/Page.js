import { Routes, Route, Link } from "react-router-dom";

import { Container, Box } from "@chakra-ui/react";

import Home from "./Home";
import Projects from "./Projects";

import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";


const Page = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Container>
    </Box>
  );
};
export default Page;
