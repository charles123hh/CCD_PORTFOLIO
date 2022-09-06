import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: props => ({
    body: {
      color: mode('white', '#fff')(props),
      bg: mode('black', '#000')(props),
      fontFamily: 'CONSOLA',
      fontSize: 14,
      fontWeight: 'light'
    },
    fontSizes: {
        sm: 14,
    },
  }),
};

const Theme = extendTheme({
  styles
});

export default Theme;
