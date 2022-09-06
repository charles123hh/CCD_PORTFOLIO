import { Box, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box p={3} m={3} pt={0} pb={0}  fontWeight="lighter" >
        <Text as="pre">:'######:::'######::'########::</Text>
        <Text as="pre">'##... ##:'##... ##: ##.... ##:</Text>
        <Text as="pre"> ##::::::: ##::::::: ##:::: ##:</Text>
        <Text as="pre"> ##::: ##: ##::: ##: ##:::: ##:</Text>
        <Text as="pre">. ######::. ######:: ########::</Text>
        <Text as="pre">:......::::......:::........:::</Text>
    </Box>
  );
};

export default Banner;
