import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Box, Text } from "../../../components";

import SocialLogin from "./SocialLogin";

interface FooterProps {
  title: string;
  action: string;
  onPress: () => void;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <TouchableWithoutFeedback {...{ onPress }}>
          <Text color="white">
            <Text>{title} </Text>
            <Text color="primary">{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
