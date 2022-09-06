import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={3} m={3} pt={0} align="">
        <Text as="pre" fontWeight="bold" color="yellow">
             &nbsp;______     ______     _____<br/>
            /\  ___\   /\  ___\   /\  __-.<br/>
            \ \ \____  \ \ \____  \ \ \/\ \<br/>
             &nbsp;\ \_____\  \ \_____\  \ \____-<br/>
              &nbsp;&nbsp;\/_____/   \/_____/   \/____/<br/>
        </Text>
    </Box>
  );
};

export default Home;
