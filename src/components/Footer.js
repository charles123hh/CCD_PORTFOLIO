import { Box, Text, Link } from "@chakra-ui/react";

import useMenu from "../hooks/useMenu";

const Footer = (props) => {
  const [setPage] = useMenu();

  return (
    <Box p={3} m={3}>
        <Text>Hello, I'm a programmer based in Philippines.</Text>
         <Text mt={2}><Link onClick={(event) => setPage('')}>CCD</Link> [Version 06.10.1997.25]</Text>
        <Text>© {new Date().getFullYear()}  All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
