import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

const Posts = () => {
  return (
    <Box p={3} m={3} pt={0}>
      <Header text="Posts" component="span" />
    </Box>
  );
};

export default Posts;
