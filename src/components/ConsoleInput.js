import { Box, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import useMenu from "../hooks/useMenu";

const ConsoleInput = (props) => {
  const [setMenu] = useMenu();

  const HandleKeyEvent = (event) => {
    if (event.keyCode === 13) {
        setMenu(event.target.value)
    }
  }

  return (
    <Box p={3} m={3}>
         <Text >Select an option to continue 0 - 5 </Text>
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
