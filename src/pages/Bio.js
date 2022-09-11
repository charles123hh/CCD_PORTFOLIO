import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Home = () => {
  return (
    <Box p={3} m={3} pt={0}>
        <Header text="Bio" component="span"/>
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
