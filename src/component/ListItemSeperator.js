import React from 'react';
import { View,StyleSheet } from 'react-native';

function ListItemSeperator() {
    return (
        <View style={styles.seperator}/>
    );
}

const styles = StyleSheet.create({
    seperator:{
        width:"100%",
        backgroundColor:"black",
        height:1
    }

})

export default ListItemSeperator;