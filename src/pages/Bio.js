import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={3} m={3} pt={0}>
        <Text className="menu">
           <Text ml={3} bg="black" as="span">Bio</Text>
        </Text>
        <Text as="b">
            Charles Daliiay
        </Text>
        <Text>
            Developer / Designer
        </Text>
        <br/>
        <Text>

        </Text>
    </Box>
  );
};

export default Home;
