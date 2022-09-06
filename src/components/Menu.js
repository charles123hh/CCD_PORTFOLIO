import { Link, Box, Text } from "@chakra-ui/react";

import useMenu from "../hooks/useMenu";

const Home = (props) => {
  const [setPage] = useMenu();

  return (
    <Box p={3} m={3} mb={0} pt={0}>
        <Text className="menu" >
            <Text ml={3} bg="black" as="b">Menu</Text>
        </Text>
        <Text>
            [0]&nbsp;
            <Text as={Link} onClick={(event) => setPage('0')}>Bio</Text>
        </Text>
        <Text>
            [1]&nbsp;
            <Text as={Link} onClick={(event) => setPage('1')}>Experience</Text>
        </Text>
        <Text>
            [2]&nbsp;
            <Text as={Link} onClick={(event) => setPage('2')}>Projects</Text>
        </Text>
        <Text>
            [3]&nbsp;
            <Text as={Link} onClick={(event) => setPage('3')}>Contact</Text>
        </Text>
        <Text>
            [4]&nbsp;
            <Text as={Link} onClick={(event) => setPage('4')}>I <Text as="b" color="red">♥</Text></Text>
        </Text>
        <Text>[5] Dark | Light</Text>
    </Box>
  );
};

export default Home;
