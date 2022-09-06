import { Box, Text } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Box p={3} m={3} pt={0} align="">
        <Text as="pre" fontWeight="bold" color="yellow">
            ___   ___  ________  ___   ___
           |\  \ |\  \|\   __  \|\  \ |\  \
           \ \  \\_\  \ \  \|\  \ \  \\_\  \
            \ \______  \ \  \\\  \ \______  \
             \|_____|\  \ \  \\\  \|_____|\  \
                    \ \__\ \_______\     \ \__\
                     \|__|\|_______|      \|__|
        </Text>
    </Box>
  );
};

export default PageNotFound;
