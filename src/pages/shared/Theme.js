import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: props => ({
    body: {
      color: mode('#EFF1FF', '#141214')(props),
      bg: mode('#141214', '#EFF1FF')(props),
      fontFamily: 'CONSOLA',
      fontWeight: 'normal',
      fontSize: 14
    },
    '.menu': {
        borderColor: mode('rgba(239, 241, 255, 0.8)', 'rgba(20, 18, 20, 0.8)')(props),
        span: {
            color: mode('#EFF1FF', '#141214')(props),
            bg: mode('#141214', '#EFF1FF')(props)
        },
        b: {
          bg: mode('#141214', '#EFF1FF')(props)
        }
    },
    '.highlight': {
        color: mode('#141214 !important', '#EFF1FF !important')(props),
        bg: mode('#EFF1FF !important', '#141214 !important')(props)
    },
    fontSizes: {
        sm: 14
    },
  }),
};

const Theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles
});

export default Theme;
