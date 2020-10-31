import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import OutfitIdeas from "./OutfitIdeas";
import DrawerContent, {
  DRAWER_WIDTH,
  assets as drawerAssets,
} from "./Drawer/Drawer";

const Drawer = createDrawerNavigator();
export const assets = [drawerAssets];

export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
  </Drawer.Navigator>
);
