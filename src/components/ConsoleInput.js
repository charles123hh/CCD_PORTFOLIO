import { Box, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

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
          <InputGroup size="sm">
             <InputLeftElement
               pointerEvents='none'
               fontSize='sm'
               children='~'
             />
             <Input autoFocus onKeyDown={(event) => HandleKeyEvent(event)} border="none"  fontSize="sm" placeholder='ex. 0'/>
           </InputGroup>
    </Box>
  );
};

export default ConsoleInput;
