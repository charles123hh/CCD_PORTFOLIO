import { Box, Text } from "@chakra-ui/react";

const ILove = () => {
  return (
    <Box p={3} m={3} pt={0}>
       <Text className="menu">
         <Text ml={3} bg="black" as="span">
              I <Text as="small">❤</Text>
         </Text>
      </Text>
    </Box>
  );
};

export default ILove;
