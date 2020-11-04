import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

const styles = StyleSheet.create({});

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ marginTop: insets.top }}
      paddingHorizontal="l"
    >
      <RoundedIconButton
        iconRatio={0.4}
        onPress={left.onPress}
        size={44}
        name={left.icon}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        iconRatio={0.4}
        size={44}
        onPress={right.onPress}
        name={right.icon}
        {...{ color, backgroundColor }}
      />
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
