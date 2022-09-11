import { Box, Text, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";

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
          <InputGroup size='xs'>
            <InputLeftAddon bg="" pl={0} pr={0} pointerEvents='none' border="none" fontSize='sm' 
              children={
                <Text>
                  <Text fontWeight="semibold" as="span" color="#39FF14">charles@dalisay</Text>
                  <Text fontWeight="semibold" as="span">:</Text>
                  <Text fontWeight="semibold" as="span" color="#1F51FF">/ccd/menu{props.location}$</Text>
                </Text>
              } />
            <Input ref={ref} onKeyDown={(event) => props.handleKeyEvent(event)} border="none"  fontSize="sm" readOnly={props.readOnly} placeholder={props.placeholder} />
          </InputGroup>
    </Box>
  );
};

export default ConsoleInput;
