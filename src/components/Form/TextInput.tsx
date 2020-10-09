import React from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import theme, { Box } from "../Theme";

const styles = StyleSheet.create({});

interface TextInputProps extends RNTextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const color = !touched ? "text" : error ? "danger" : "primary";
  const iconColor = theme.colors[color];

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      height={48}
      borderColor={color}
      padding="s"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
    >
      <Box paddingHorizontal="m">
        <Icon name={icon} color={iconColor} size={16} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor={iconColor}
          {...props}
        />
      </Box>

      {touched && (
        <Box
          height={SIZE}
          width={SIZE}
          borderRadius="m"
          alignItems="center"
          justifyContent="center"
          backgroundColor={!error ? "primary" : "danger"}
        >
          <Icon name={!error ? "check" : "x"} color="white" />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
