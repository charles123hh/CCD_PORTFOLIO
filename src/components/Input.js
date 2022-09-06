import { Box, Text, Input } from "@chakra-ui/react";

const TextInput = (props) => {
  return (
    <Box p={3} m={3}>
         <Text >Please select an option to continue: </Text>
         <Input autoFocus onKeyDown={(event) => props.handleKeyDown(event)} size="sm" variant='unstyled' placeholder='ex. 0' />
    </Box>
  );
};

export default TextInput;
