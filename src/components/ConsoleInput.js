import { Box, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

import { useRef, useEffect } from 'react';

const ConsoleInput = (props) => {

    const ref = useRef(null);
    useEffect(() => {
         const element = ref.current;
         const listener = (event) => {
            element.focus();
        }
        document.addEventListener('mousemove', listener);
        return () => {
          document.removeEventListener('mousemove', listener);
        };
    }, []);

  return (
    <Box p={0} m={0}>
         <Text>{props.text}</Text>
          <InputGroup size="sm">
             <InputLeftElement
               pointerEvents='none'
               fontSize='sm'
               children='~'
             />
             <Input ref={ref} onKeyDown={(event) => props.handleKeyEvent(event)} border="none"  fontSize="sm" readOnly={props.readOnly} placeholder={props.placeholder}/>
           </InputGroup>
    </Box>
  );
};

export default ConsoleInput;
