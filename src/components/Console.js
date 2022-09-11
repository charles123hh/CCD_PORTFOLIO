import { Box } from "@chakra-ui/react";

import ConsoleInput from "./ConsoleInput";

import useMenu from "../hooks/useMenu";
import useMode from "../hooks/useMode";

const Comsole = () => {
  const [activeMenu, setMenu,  getCurrentLocation] = useMenu();
  const [activeMode, setMode] = useMode();

  const handleKeyEvent = (event) => {
    if (event.keyCode === 13 && event.target.value === '5') {
        if(activeMode("light")) {
           setMode("light");
        } else {
          setMode("dark");
        }
        event.target.value = "";
    } else if (event.keyCode === 13 && event.target.value !== 5) {
        setMenu(event.target.value);
        event.target.value = "";
    }
  }

  const handleKeyEvent_2 = (event) => {
    if(event.keyCode === 13){
      event.target.value = "";
      setMenu(event.target.value);
    }
    if (event.target.value === "") {
      event.target.value = "";
    } 
}

  let console;

  if(activeMenu('')){
    console = <ConsoleInput text="Select an option to continue 0 ~ 5" location={getCurrentLocation()} handleKeyEvent = {handleKeyEvent} placeholder={"ex. 0"}/>;
  } else {
    console = <ConsoleInput text="Press enter key to continue..." location={getCurrentLocation()} handleKeyEvent = {handleKeyEvent_2} />;
  }

  return (
    <Box p={3} m={3} pt={0}>
       {console}
    </Box>
  );
};

export default Comsole;
