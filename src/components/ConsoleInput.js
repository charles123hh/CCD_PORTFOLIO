import { Box, Text, Input } from "@chakra-ui/react";

import useMenu from "../hooks/useMenu";

const ConsoleInput = (props) => {
  const [setPage] = useMenu();

  const HandleKeyEvent = (event) => {
    if (event.keyCode === 13) {
        setPage(event.target.value)
    }
  }

  return (
    <Box p={3} m={3}>
         <Text >Please select an option to continue: </Text>
         <Input autoFocus onKeyDown={(event) => HandleKeyEvent(event)} size="sm" variant='unstyled' placeholder='ex. 0' />
    </Box>
  );
};

export default ConsoleInput;
