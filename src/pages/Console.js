import { Box } from "@chakra-ui/react";

import ConsoleInput from "../components/ConsoleInput";

import useMenu from "../hooks/useMenu";

const Comsole = () => {
  const [setMenu, isActive] = useMenu();

  const handleKeyEvent = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
          setMenu(event.target.value);
          event.target.value = "";
      }
  }

  let console;

  if(isActive('')){
    console = <ConsoleInput text="Select an option to continue 0 - 5" handleKeyEvent = {handleKeyEvent} placeholder={"ex. 0"}/>;
  } else {
    console = <ConsoleInput text="Press enter key to continue..."  handleKeyEvent = {handleKeyEvent} readOnly={true}/>;
  }

  return (
    <Box p={3} m={3} pt={0}>
       {console}
    </Box>
  );
};

export default Comsole;
