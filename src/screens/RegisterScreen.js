import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

import { LoginRegisterSchema } from '../validations/ValidationSchema';
import Screen from '../component/Screen';

import Form from '../component/form/Form';
import FormField from '../component/form/FormField';
import SubmitButton from '../component/form/SubmitButton';
import * as IMAGE from '../config/images'
import Logo from '../component/Logo';

function RegisterScreen() {
    function register(user) {
        Alert.alert("Registration Success");
    }

    return (
        <Screen style={styles.container}>
            <ImageBackground source={IMAGE.LOGIN_BACKGROUND} style={styles.image}>

            <Logo/>
                <View style={{ padding: 10 }}>
                    <Form
                        initialValues={{ name: "", email: "", password: "", cfpassword: "" }}
                        onSubmit={(values) => register(values)}
                        validationSchema={LoginRegisterSchema}
                    >
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            name="name"
                            placeholder="Name"
                            textContentType="name"
                        />

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
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="cfpassword"
                            placeholder="Confirm Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton title="Register" />
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
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default RegisterScreen;