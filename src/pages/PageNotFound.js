import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const PageNotFound = () => {
  return (
    <Box p={3} m={3} pt={0} >
        <Header bg="black" color="red" fontWeight="bold" text="404"/>
        <Text color="red" align="center" textTransform="uppercase" fontWeight="bold" >Page Not Found</Text>
    </Box>
  );
};

export default PageNotFound;
