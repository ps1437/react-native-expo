import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import TextField from '../../TextField';

function CardDetails(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../asset/shoes.jpg")} />
            <View style={styles.detailsContainer}>
                <TextField style={styles.title}> Shoes</TextField>
                <TextField style={styles.subTitle}> 1500</TextField>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "dodgerblue"
    }
})

export default CardDetails;