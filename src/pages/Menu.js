import { Link, Box, Text } from "@chakra-ui/react";

import Header from "../components/Header";

import useMenu from "../hooks/useMenu";
import useMode from "../hooks/useMode";

import CV from "../resources/CV.pdf";

const Home = () => {
  const [activeMenu, setMenu] = useMenu();
  const [activeMode, setMode] = useMode();

  return (
    <Box p={3} m={3} mb={0} pt={0}>
        <Header text="Menu" component="span" />
        <Text>
            [1]&nbsp;
            <Text as={Link} className={activeMenu('1') ? "highlight" : ""} onClick={() => setMenu('1')}>Bio</Text>
        </Text>
        <Text>
            [2]&nbsp;
            <Text as={Link} className={activeMenu('2') ? "highlight" : ""} onClick={() => setMenu('2')}>I <Text as="small" color="red" fontWeight="bold">❤</Text></Text>
        </Text>
        <Text>
            [3]&nbsp;
            <Text as={Link} className={activeMenu('3') ? "highlight" : ""} onClick={() => setMenu('3')}>Projects</Text>
        </Text>
         <Text>
            [4]&nbsp;
            <Text as={Link} className={activeMenu('4') ? "highlight" : ""} onClick={() => setMenu('4')}>Posts</Text>
        </Text>
        <Text>
            [5]&nbsp;
            <Text as={Link} className={activeMenu('5') ? "highlight" : ""} onClick={() => setMenu('5')}>Contact</Text>
        </Text>
        <Text>
            [6]&nbsp;
            <Text as={Link} href={CV} isExternal>CV</Text>
        </Text>
        <Text>
            [7]&nbsp;
            <Text as={Link} className={activeMode('light') ? "highlight" : ""} onClick={() => setMode("dark")}>Dark</Text>
            <Text as="span">&nbsp;|&nbsp;</Text>
            <Text as={Link} className={activeMode('dark') ? "highlight" : ""} onClick={() => setMode("light")}>Light</Text>
        </Text>
        
    </Box>
  );
};

export default Home;
