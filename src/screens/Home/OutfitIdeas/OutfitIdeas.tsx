import React from "react";
import { StyleSheet } from "react-native";

import { Box, Header } from "../../../components";
import { HomeNavigationProps } from "../../../components/Navigation";

const styles = StyleSheet.create({});

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
    </Box>
  );
};

export default OutfitIdeas;
