import React from 'react';
import { Image, StyleSheet} from 'react-native';
import {LOGO} from '../config/images';

function Logo({style}) {
    return <Image style={[styles.logo,style]} source={LOGO} />

}

const styles = StyleSheet.create({
  logo:{
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  }
 
})

export default Logo;