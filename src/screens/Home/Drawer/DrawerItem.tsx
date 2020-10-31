import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { Box, RoundedIcon } from "../../../components";
import { Text, Theme, useTheme } from "../../../components/Theme";

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  screen: string;
  label: string;
}

const DrawerItem = ({ color, icon, screen, label }: DrawerItemProps) => {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          backgroundColor={color}
          size={36}
          color="white"
          name={icon}
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
