import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Text } from "../../components/Theme";
import { Button, Container } from "../../components";
import { TextInput, CheckBox } from "../../components/Form";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import Footer from "./components/Footer";

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Too Short!")
    .max(12, "Too Long!")
    .required("Required"),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const SignUp = ({ navigation }: StackNavigationProps<Routes, "SignUp">) => {
  const passwordRef = useRef<typeof TextInput>(null);
  const confirmPasswordRef = useRef<typeof TextInput>(null);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      remember: false,
    },
    onSubmit: (values) => console.log(values),
  });

  const footer = (
    <Footer
      onPress={() => navigation.navigate("Login")}
      title="Already have an account?"
      action="Login here"
    />
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="m">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let's us know what your name, email and your password
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
            returnKeyLabel="next"
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
          />
          <Box marginBottom="m" />
          <TextInput
            ref={confirmPasswordRef}
            icon="lock"
            placeholder="Confirm your Password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            value={values.passwordConfirmation}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
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
          >
            <CheckBox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <Button
              variant="transparent"
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary">forgot password?</Text>
            </Button>
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Create your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
