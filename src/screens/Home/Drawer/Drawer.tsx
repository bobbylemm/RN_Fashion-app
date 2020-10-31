import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "../../../components";
import RoundedIconButton from "../../../components/RoundedIconButton";

import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");

export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favourite Outfits",
    screen: "FavouriteOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "pink",
  },
  {
    icon: "settings",
    label: "Notification Settings",
    screen: "NotificationSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Logout",
    screen: "Logout",
    color: "secondary",
  },
];

const Drawer = () => {
  // const insets = useSafeAreaInsets();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal="l"
          style={{ paddingTop: 40 }}
        >
          <RoundedIconButton
            onPress={() => true}
            size={24}
            name="x"
            color="white"
            backgroundColor="secondary"
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            size={24}
            onPress={() => true}
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Image
          source={require("../../../components/assets/patterns/pattern-1.png")}
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            width: undefined,
            height: 40,
          }}
        />
        <Box
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            style={{ borderRadius: 50 }}
            height={100}
            width={100}
            backgroundColor="primary"
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Onyinye Nwoga
            </Text>
            <Text variant="body" textAlign="center">
              onyinyenwoga@gmail.com
            </Text>
          </Box>

          {items.map((item) => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box
        flex={0.2}
        width={DRAWER_WIDTH}
        height={height * 0.61}
        backgroundColor="white"
        overflow="hidden"
      >
        <Image
          source={require("../../../components/assets/patterns/pattern-1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
