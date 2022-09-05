import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="red" align="center" opacity={1} fontSize="sm">
      &copy; {new Date().getFullYear()} Charles Dalisay. All Rights Reserved.
    </Box>
  );
};

export default Footer;
