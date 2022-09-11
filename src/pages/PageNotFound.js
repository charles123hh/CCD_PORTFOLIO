import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const PageNotFound = () => {
  return (
    <Box p={3} m={3} pt={0} >
        <Header color="red" text="404" component="b"/>
        <Text color="red" align="center" textTransform="uppercase" fontWeight="bold" >Page Not Found</Text>
    </Box>
  );
};

export default PageNotFound;
