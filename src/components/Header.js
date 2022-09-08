import { Text } from "@chakra-ui/react";

const Header = (props) => {
  return (
    <Text className="menu">
       <Text ml={3} bg={props.bg} color={props.color} fontWeight={props.fontWeight} as="span">{props.text}</Text>
    </Text>
  );
};

export default Header;
