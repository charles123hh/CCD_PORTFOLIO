import { Box, Text, Link } from "@chakra-ui/react";

import useMenu from "../hooks/useMenu";

const Footer = (props) => {
  const [setMenu] = useMenu();

  const calculateAge = (dateString) =>  { // birthday is a date
      var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
  }

  return (
    <Box p={3} m={3}>
        <Text>Hello, I'm a programmer based in Philippines.</Text>
         <Text mt={2}><Link onClick={(event) => setMenu('')}>CCD</Link> [Version 06.10.1997.{calculateAge("1997-06-10")}]</Text>
        <Text>© {new Date().getFullYear()}  All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
