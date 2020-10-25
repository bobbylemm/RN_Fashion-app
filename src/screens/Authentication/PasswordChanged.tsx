import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Box,
  Button,
  ClosedButton,
  Container,
  Text,
  useTheme,
} from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  const theme = useTheme();

  return (
    <Container
      footer={<ClosedButton onPress={() => navigation.navigate("Login")} />}
    >
      <Box flex={1} justifyContent="center">
        <Box
          backgroundColor="primaryLight"
          height={60}
          width={60}
          borderRadius="xl"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          marginBottom="xl"
        >
          <Icon name="check" size={32} color={theme.colors.primary} />
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="m">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let's us know what your name, email and your password
        </Text>
        <Box alignItems="center" marginTop="l">
          <Button
            variant="primary"
            label="Create your account"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
