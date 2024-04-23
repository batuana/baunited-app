import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const LinkButton = ({ onPress, imageSource, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary100,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 40,
    height: 33,
    marginRight: 10,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
  },
});

export default LinkButton;
