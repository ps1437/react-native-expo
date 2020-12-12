import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import TextField from '../../TextField';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image
                resizeMode="contain"
                style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <TextField style={styles.title}> {title}</TextField>
                <TextField style={styles.subTitle}> {subTitle}</TextField>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    card: {
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
        marginHorizontal: 10,
        overflow: "hidden"

    },
    detailsContainer: {
        padding: 10
    },
    image: {
        width: "100%",
        height: 150
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        marginBottom: 5
    },
    subTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black"
    }
})
export default Card;