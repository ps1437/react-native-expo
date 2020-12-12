import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default function TextField({children,style,...otherProps}) {
    return (
        <Text style={[styles.text,{...style}]} {...otherProps}>
            {children}
        </Text>
    );
}

const patformStyle = Platform.select({
    ios: {
        fontFamily: "Avenir",
        fontSize: 20,
        padding: 5
    },

    android: {
        fontFamily: "Roboto",
        fontSize: 18,
        padding: 5
    },
})

const styles = StyleSheet.create({

    text: {
        justifyContent: 'center',
        alignItems: 'center',
        ...patformStyle
    },
});
