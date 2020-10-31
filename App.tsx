import * as React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeNavigator } from "./src/screens/Home";
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/screens/Authentication";
import LoadAssets from "./src/components/LoadAssets";
import { theme } from "./src/components/Theme";

const assets = [...authenticationAssets];
const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SFProDisplay-Black.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SFProDisplay-Semibold.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.ttf"),
};

type AppStackRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export const AppStack = createStackNavigator<AppStackRoutes>();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
