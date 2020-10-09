import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../Theme";

const styles = StyleSheet.create({});

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {
  return (
    <RectButton onPress={() => onChange()}>
      <Box flexDirection="row">
        <Box
          marginRight="s"
          width={20}
          height={20}
          backgroundColor={checked ? "primary" : "grey"}
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          borderRadius="s"
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;
