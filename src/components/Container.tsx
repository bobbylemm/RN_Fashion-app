import React, { ReactNode } from "react";
import { StyleSheet, Image, Dimensions, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useTheme } from "./Theme";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

export const assets = [
  require("./assets/patterns/pattern-1.png"),
  require("./assets/patterns/pattern-2.png"),
  require("./assets/patterns/pattern-3.png"),
] as const;
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];

  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          height={height * 0.61}
          overflow="hidden"
        >
          <Image
            source={asset}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>

      <Box flex={1} overflow="hidden">
        <Image
          source={asset}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            top: -height * 0.61,
          }}
        />
        <Box
          flex={1}
          borderTopLeftRadius={0}
          borderRadius="xl"
          backgroundColor="white"
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;
