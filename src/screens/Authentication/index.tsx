import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "../../components/Navigation";

import OnBoarding, { assets as onBoardingAssets } from "./OnBoarding";
import Welcome, { assets as welcomeAssets } from "./Welcome";
import Login from "./Login";
import SignUp from "./Signup";
import ForgotPassword from "./ForgotPassword";
import PasswordChanged from "./PasswordChanged";

export const assets = [...onBoardingAssets, ...welcomeAssets];

export const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      />
    </AuthenticationStack.Navigator>
  );
};
