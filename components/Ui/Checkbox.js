import React, { useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CheckBox = ({
  text,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}
      >
        <Animated.View style={{ width: animatedWidth }}>
          <Icon name="checkmark" size={20} style={{ color: "black" }} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={[styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  checkbox: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 22,
    width: 22,
  },
  checkboxSelected: {
    backgroundColor: "white",
  },
  checkboxText: {
    fontSize: 15,
    marginLeft: 10,
    fontFamily: "poppins-semibold",
  },
});

export default CheckBox;
