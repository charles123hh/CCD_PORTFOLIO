import { Routes, Route, useNavigate } from "react-router-dom";

import { Container } from "@chakra-ui/react";

import "./Page.css"

import Banner from "../components/Banner";
import PageNotFound from "../components/PageNotFound";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Input from "../components/Input";

import Bio from "./Bio";
import Expirience from "./Expirience";
import Projects from "./Projects";
import Contact from "./Contact";
import ILove from "./ILove";


const Page = () => {
  let navigate = useNavigate();

  const menuLinks = (key) => {
   switch(key){
        case '0':
            document.title = "CDD - Bio";
            navigate({pathname: "/bio"});
            break;
        case '1':
            document.title = "CDD - Expirience";
            navigate({pathname: "/expirience"});
            break;
        case '2':
            document.title = "CDD - Projects";
            navigate({pathname: "/projects"});
            break;
        case '3':
            document.title = "CDD - Contact";
            navigate({pathname: "/contact"});
            break;
        case '4':
            document.title = "CDD - I ♥";
            navigate({pathname: "/i/love"});
            break;
        default :
            document.title = "CDD";
            navigate({pathname: "/"});
            break;
   }

  }
    const handleKeyPress = (event, value) => {
        event.preventDefault();
        menuLinks(value)
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            menuLinks(event.target.value)
        }
    }
  return (
      <Container maxW="container.sm" pt={10}>
        <Banner />
        <Footer handleKeyPress={handleKeyPress}/>
        <Menu handleKeyPress={handleKeyPress}/>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/bio"  element={ <Bio />} />
          <Route exact path="/expirience" element={<Expirience />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/i/love" element={<ILove />} />
        </Routes>
        <Input handleKeyDown={handleKeyDown}/>
      </Container>
  );
};
export default Page;
