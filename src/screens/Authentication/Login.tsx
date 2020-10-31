import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, Text } from "../../components/Theme";
import { Button, Container } from "../../components";
import { TextInput, CheckBox } from "../../components/Form";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import Footer from "./components/Footer";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const passwordRef = useRef<typeof TextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => navigation.navigate("Home"),
  });

  const footer = (
    <Footer
      onPress={() => navigation.navigate("SignUp")}
      title="Don't have an account?"
      action="Sign up here"
    />
  );
  return (
    <Container {...{ footer }} pattern={0}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below to login into your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              autoCapitalize={"none"}
              autoCompleteType="email"
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>

          <TextInput
            ref={passwordRef}
            icon="lock"
            placeholder="Enter your Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize={"none"}
            secureTextEntry
            returnKeyLabel="go"
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit()}
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginVertical="m"
          >
            <CheckBox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text variant="button" color="primary">
                Forgot password?
              </Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="login into your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
