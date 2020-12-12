import React from "react";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../../src/config/colors";
import Logo from "../component/Logo";
import routes from "../navigation/routes";
import {WELCOME_BACKGROUND} from '../config/images';

function AppButton({ navigation, route, color, title }) {
    return <TouchableOpacity
            onPress={() => navigation.navigate(route)}
            style={[styles.button, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
}

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={8}
            style={styles.background}
            source={WELCOME_BACKGROUND}
        >
            <View style={styles.logoContainer}>
                <Logo />
                <Text style={styles.tagline}>Devanse Collection</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" navigation={navigation} route={routes.LOGIN} color={colors.primary} />
                <AppButton title="Register" navigation={navigation} route={routes.REGISTER} color={colors.secondary} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
        flexDirection: "row"
    },

    button: {
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        justifyContent: "center",
        elevation: 1,
        flex: 1,
        marginHorizontal: 5
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        padding: 10,
        fontSize: 28,
        color: colors.white,
        fontWeight: "800",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
