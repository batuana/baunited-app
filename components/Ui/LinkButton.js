import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const LinkButton = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Colors.primary800,
    // backgroundColor: 'red',
    // padding: 10,
    borderWidth: 1,
    borderColor: "#458BB2",
    borderRadius: 5,
    flex: 1,
  },
  image: {
    width: "100%",
    height: 55,
  },
});

export default LinkButton;
