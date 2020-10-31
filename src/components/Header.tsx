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
}

const Header = ({ left, right, title }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      style={{ marginTop: insets.top }}
      paddingHorizontal="l"
    >
      <RoundedIconButton
        onPress={() => left.onPress}
        size={24}
        name={left.icon}
        color="white"
        backgroundColor="secondary"
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={24}
        onPress={() => right.onPress}
        name={right.icon}
        color="white"
        backgroundColor="secondary"
      />
    </Box>
  );
};

export default Header;
