import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box } from "./Theme";
import RoundedIcon from "./RoundedIcon";

interface ClosedButtonProps {
  onPress: () => void;
}

const SIZE = 60;
const ClosedButton = ({ onPress }: ClosedButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <RoundedIcon
          name="x"
          color="secondary"
          size={SIZE}
          backgroundColor="white"
        />
      </Box>
    </RectButton>
  );
};

export default ClosedButton;
