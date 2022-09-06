import { Box, Text, Link } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <Box p={3} m={3}>
        <Text>Hello, I'm a programmer based in the Philippines.</Text>
        <Text>  &copy; {new Date().getFullYear()} <Link onClick={(event) => props.handleKeyPress(event, '')} fontWeight="bold" >CCD</Link>. All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
