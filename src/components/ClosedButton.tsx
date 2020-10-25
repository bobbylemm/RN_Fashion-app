import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, useTheme } from "./Theme";

interface ClosedButtonProps {
  onPress: () => void;
}

const SIZE = 60;
const ClosedButton = ({ onPress }: ClosedButtonProps) => {
  const theme = useTheme();
  return (
    <RectButton {...{ onPress }}>
      <Box
        style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
      >
        <Icon color={theme.colors.secondary} name="x" size={45} />
      </Box>
    </RectButton>
  );
};

export default ClosedButton;
