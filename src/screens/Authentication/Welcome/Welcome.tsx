import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Button } from "../../../components";

import theme, { Box, Text } from "../../../components/Theme";

const styles = StyleSheet.create({});

interface WelcomeProps {}

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

const Welcome = () => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          justifyContent="space-between"
          alignItems="center"
          paddingHorizontal="xl"
          paddingVertical="l"
          flex="1"
        >
          <Text variant="title2" textAlign="center">
            Let's get started
          </Text>
          <Text variant="body" textAlign="center">
            Login into your account below or signup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => {}}
          />
          <Button label="Join us, it's free" onPress={() => {}} />
          <Button
            variant="transparent"
            label="Forgot password?"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
