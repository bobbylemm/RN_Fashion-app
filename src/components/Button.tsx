import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: "SFProText-Regular",
    textAlign: "center",
  },
});

const buttonVariants = {
  primary: "#2CB9B0",
  default: "rgba(12,13,52,0.05)",
};

interface ButtonProps {
  variant: "primary" | "default";
  label: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const color = variant === "primary" ? "white" : "0C0D34";
  return (
    <RectButton
      style={[styles.container, { backgroundColor: buttonVariants[variant] }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
