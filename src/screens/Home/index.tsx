import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import OrderTractor from "./OrderTractor";

const Drawer = createDrawerNavigator();

export const HomeNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="OrderTractor" component={OrderTractor} />
  </Drawer.Navigator>
);
