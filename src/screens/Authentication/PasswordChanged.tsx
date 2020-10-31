import React from "react";

import { Box, Button, Container, RoundedIcon, Text } from "../../components";
import { AuthNavigationProps } from "../../components/Navigation";
import RoundedIconButton from "../../components/RoundedIconButton";

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={1}
      footer={
        <Box paddingVertical="xl">
          <RoundedIconButton
            color="white"
            backgroundColor="secondary"
            onPress={() => navigation.pop()}
            name="x"
          />
        </Box>
      }
    >
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
    </Container>
  );
};

export default PasswordChanged;
