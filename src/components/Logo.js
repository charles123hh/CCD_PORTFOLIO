import { Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

import TagLabel from "./TagLabel";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`;

const Logo = () => {
  return (
    <Text as={NavLink} to={'/'}>
      <LogoBox>
        <TagLabel tag="logo" />
        <Text color="white" ml={1}>
          Charles Dalisay
        </Text>
      </LogoBox>
    </Text>
  );
};

export default Logo;
