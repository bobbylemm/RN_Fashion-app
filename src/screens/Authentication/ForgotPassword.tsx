import { useFormik } from "formik";
import React from "react";
import { Linking } from "react-native";
import * as Yup from "yup";

import { Box, Button, Container, Text } from "../../components";
import { TextInput } from "../../components/Form";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import Footer from "./components/Footer";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ForgotPassword">) => {
  const footer = (
    <Footer
      onPress={() => Linking.openURL("malito:support@onyistore.com")}
      title="Don't work? "
      action="Try another way"
    />
  );

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: ForgotPasswordSchema,
    initialValues: {
      email: "",
    },
    onSubmit: (_) => navigation.navigate("PasswordChanged"),
  });
  return (
    <Container {...{ footer }}>
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="m">
          Forgot Password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with you account.
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
              returnKeyLabel="go"
              returnKeyType="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Reset password"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
