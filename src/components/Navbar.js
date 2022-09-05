import {
  Container,
  Flex,
  Box,
  Heading,
  Link,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <Box mt={0} position="fixed" as="nav" w="100%" bg="red" zIndex={2}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="md" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
