import React from 'react';
import { StyleSheet } from 'react-native';

import defaulStyles from '../config/style';
import { Form, FormField, SubmitButton } from '../component/form/index';
import { LoginValidation } from '../validations/ValidationSchema';
import Screen from '../component/Screen';


function LoginScreen() {
    return (
        <Screen style={styles.container}>

            <Form initialValues={{ email: "", password: "" }}
                onSubmit={() => console.log(email, password)}
                validationSchema={LoginValidation}
            >
                <FormField
                    placeholder="Email"
                    textContentType="emailAddress"
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                />

                <FormField
                    placeholder="Password"
                    textContentType="password"
                    icon="lock"
                    maxLength={15}
                    secureTextEntry
                    name="password"
                />

                <SubmitButton
                    color={defaulStyles.colors.danger}
                    accessibilityLabel="loginbutton"
                    title="Submit" />

            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default LoginScreen;