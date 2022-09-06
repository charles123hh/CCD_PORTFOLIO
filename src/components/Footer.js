import { Box, Text, Link } from "@chakra-ui/react";

import useMenu from "../hooks/useMenu";

const Footer = (props) => {
  const [setPage] = useMenu();

  return (
    <Box p={3} m={3}>
        <Text>Hello, I'm a programmer based in the Philippines.</Text>
        <Text>  &copy; {new Date().getFullYear()} <Link onClick={(event) => setPage('')} fontWeight="bold" >CCD</Link>. All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
