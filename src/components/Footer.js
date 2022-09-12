import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {

  const calculateAge = (dateString) =>  {
      var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
  }

  return (
    <Box p={3} m={3}>
        <Text>Hello, I'm Charles, an app developer based in the Philippines.</Text>
         <Text mt={2}>CCD <Text href='https://github.com/charles123hh/CCD_PORTFOLIO' as={Link} isExternal>[Version 06.10.1997.{calculateAge("1997-06-10")}]</Text></Text>
        <Text>© {new Date().getFullYear()}  All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
