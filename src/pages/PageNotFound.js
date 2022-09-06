import { Box, Text } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Box p={3} m={3} pt={0} >
    <Text className="menu">
             <Text ml={3} bg="black" as="b"></Text>
          </Text>
        <Text color="red" align="center" fontWeight="bold" >404</Text>
        <Text color="red" align="center" textTransform="uppercase" fontWeight="bold" >Page Not Found</Text>
    </Box>
  );
};

export default PageNotFound;
