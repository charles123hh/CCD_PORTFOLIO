import { Box } from "@chakra-ui/react";

import ConsoleInput from "../components/ConsoleInput";

import useMenu from "../hooks/useMenu";

const Comsole = () => {
  const [setMenu, isActive, getCurrentLocation] = useMenu();

  const handleKeyEvent = (event) => {
      if (event.keyCode === 13) {
          setMenu(event.target.value);
          event.target.value = "";
      }
  }

  const handleKeyEvent_2 = (event) => {
    if (event.target.value === "" &&  event.keyCode === 13) {
        setMenu(event.target.value);
    } else {
        event.target.value = "";
    }
}

  let console;

  if(isActive('')){
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
