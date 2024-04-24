import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { Colors } from "../../constants/styles";

const CustomButton = ({ children, onPress, imageSource, type, url }) => {
  const buttonStyles =
    type === "link" ? styles.linkButtonContainer : styles.buttonContainer;

  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [buttonStyles, pressed && styles.pressed]}
      onPress={handlePress}
    >
      <View style={styles.contentContainer}>
        {imageSource && (
          <Image
            source={imageSource}
            style={styles.image}
            resizeMode="contain"
          />
        )}

        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginBottom: 15,
  },
  linkButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#458BB2",
    borderRadius: 5,
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100, // Set according to your image size
    height: 50, // Set according to your image size
    marginRight: 8, // Adjust spacing between image and text
  },
});

export default CustomButton;
