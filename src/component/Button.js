import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function Button({ title, onPress, color = "primary" ,icon="login" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text> 
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    justifyContent:"center",
    elevation:1,  
    
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textAlign:"center",

    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
