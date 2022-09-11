import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

const ILove = () => {
  return (
    <Box p={3} m={3} pt={0}>
      <Header text={"I ❤"} component="span"/>
    </Box>
  );
};

export default ILove;
