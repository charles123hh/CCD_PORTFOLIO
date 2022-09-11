import { useColorMode } from "@chakra-ui/react";

const useMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const isActive = (value) => {
        return colorMode === value;
    }

    const setMode = (value) => {
        if (isActive(value)) {
            toggleColorMode();
        }
   }

    return [isActive, setMode];
}

export default useMode;