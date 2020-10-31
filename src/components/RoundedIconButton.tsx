import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box } from "./Theme";
import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <RoundedIcon {...props} />
      </Box>
    </RectButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;
