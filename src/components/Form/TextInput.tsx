import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, useTheme } from "../Theme";

const styles = StyleSheet.create({});

interface TextInputProps extends RNTextInputProps {
  icon: string;
  error?: string;
  touched?: boolean;
}

const TextInput = forwardRef(
  ({ icon, touched, error, ...props }: TextInputProps, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
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
            {...{ ref }}
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
            style={{ borderRadius: SIZE / 2 }}
          >
            <Icon
              name={!error ? "check" : "x"}
              color="white"
              style={{ textAlign: "center" }}
            />
          </Box>
        )}
      </Box>
    );
  }
);

export default TextInput;
