import React from "react";
import { Dimensions, Image } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Button } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";
import { Box, Text, useTheme } from "../../components/Theme";

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();
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
          padding="xl"
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
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            label="Join us, it's free"
            onPress={() => navigation.navigate("SignUp")}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="secondary">
              Forgot password?
            </Text>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
