import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../Theme";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {
  return (
    <BorderlessButton onPress={() => onChange()}>
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
    </BorderlessButton>
  );
};

export default CheckBox;
