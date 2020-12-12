import React from 'react';
import { StyleSheet, Image, ImageBackground, View, Alert } from 'react-native';

import { LoginRegisterSchema } from '../validations/ValidationSchema';
import Screen from '../component/Screen';

import Form from '../component/form/Form';
import FormField from '../component/form/FormField';
import SubmitButton from '../component/form/SubmitButton';
import * as IMAGE from '../config/images'
import Logo from '../component/Logo';

function LoginScreen() {

  function login(user) {
    Alert.alert("Login Success");
  }
  return (
    <Screen style={styles.container}>
      <ImageBackground source={IMAGE.LOGIN_BACKGROUND} style={styles.image}>

        <Logo />
        <View style={{ padding: 10 }}>
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => login(values)}
            validationSchema={LoginRegisterSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </Form>
        </View>
      </ImageBackground>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default LoginScreen;