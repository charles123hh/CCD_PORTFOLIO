import { Link, Box, Text } from "@chakra-ui/react";

import Header from "../components/Header";

import useMenu from "../hooks/useMenu";

const Home = (props) => {
  const [setMenu, isActive] = useMenu();

  return (
    <Box p={3} m={3} mb={0} pt={0}>
        <Header bg="black" text="Menu" />
        <Text>
            [0]&nbsp;
            <Text as={Link} className={isActive('0') ? "highlight" : ""} onClick={(event) => setMenu('0')}>Bio</Text>
        </Text>
        <Text>
            [1]&nbsp;
            <Text as={Link} className={isActive('1') ? "highlight" : ""} onClick={(event) => setMenu('1')}>Experience</Text>
        </Text>
        <Text>
            [2]&nbsp;
            <Text as={Link} className={isActive('2') ? "highlight" : ""} onClick={(event) => setMenu('2')}>Projects</Text>
        </Text>
        <Text>
            [3]&nbsp;
            <Text as={Link} className={isActive('3') ? "highlight" : ""} onClick={(event) => setMenu('3')}>Contact</Text>
        </Text>
        <Text>
            [4]&nbsp;
            <Text as={Link} className={isActive('4') ? "highlight" : ""} onClick={(event) => setMenu('4')}>I <Text as="small" color="red" fontWeight="bold">❤</Text></Text>
        </Text>
        <Text>[5] Dark | Light</Text>
    </Box>
  );
};

export default Home;
