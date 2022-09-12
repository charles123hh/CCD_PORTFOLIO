import { Box } from "@chakra-ui/react";

import ConsoleInput from "./ConsoleInput";

import useMenu from "../hooks/useMenu";
import useMode from "../hooks/useMode";

import CV from "../resources/CV.pdf";

const Comsole = () => {
  const [activeMenu, setMenu,  getCurrentLocation] = useMenu();
  const [activeMode, setMode] = useMode();

  const handleKeyEvent = (event) => {
    if (event.keyCode === 13 && event.target.value === '7') {
        if(activeMode("light")) {
           setMode("light");
        } else {
          setMode("dark");
        }
        event.target.value = "";
    } else if (event.keyCode === 13 && event.target.value === '6') {
        window.open(CV, "_blank")
        event.target.value = "";
    } else if (event.keyCode === 13 && event.target.value !== '6' && event.target.value !== '7') {
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
    console = <ConsoleInput text="Select an option to continue 1 ~ 6" location={getCurrentLocation()} handleKeyEvent = {handleKeyEvent} placeholder={"ex. 1"}/>;
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
