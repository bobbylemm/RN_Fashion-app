import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, Extrapolate } from "react-native-reanimated";

const styles = StyleSheet.create({});

interface DotProps {
  currentIndex: Animated.Node<number>;
  index: number;
}

const Dot = ({ currentIndex, index }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const width = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [8, 12, 8],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity,
        backgroundColor: "#2CB9B0",
        width,
        height: 8,
        borderRadius: 4,
        margin: 4,
        transform: [{ scale }],
      }}
    />
  );
};

export default Dot;
