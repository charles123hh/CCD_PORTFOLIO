import { Text } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <Text className="menu">
       <Text ml={3} color={props.color} as={props.component}>{props.text}</Text>
    </Text>
  );
};

export default Header;
