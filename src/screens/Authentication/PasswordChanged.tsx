import React from "react";

import {
  Box,
  Button,
  ClosedButton,
  Container,
  RoundedIcon,
  Text,
} from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      pattern={1}
      footer={
        <Box paddingVertical="xl">
          <ClosedButton onPress={() => navigation.navigate("Login")} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" paddingHorizontal="xl">
        <Box flexDirection="row" justifyContent="center" marginBottom="xl">
          <RoundedIcon
            name="check"
            color="primary"
            size={60}
            backgroundColor="primaryLight"
          />
        </Box>

        <Text variant="title1" textAlign="center" marginBottom="m">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="l">
          <Button
            variant="primary"
            label="Login into your account"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
