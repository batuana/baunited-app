import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../../constants/styles";
import { Ionicons } from "@expo/vector-icons";

function Input({
  label,
  secure,
  value,
  onUpdateValue,
  placeholder,
  style,
  icon,
  size,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const topValue = useRef(new Animated.Value(15)).current;

  const movePlaceholderTop = () => {
    Animated.timing(topValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const movePlaceholderCenter = () => {
    Animated.timing(topValue, {
      toValue: isFocused || value ? 0 : 15,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleTextLayout = async (event) => {
    const { height } = event.nativeEvent.layout;
    setPlaceholderHeight(height);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={[styles.input, style]}
          autoCapitalize="none"
          secureTextEntry={!showPassword && secure} // Dynamic secureTextEntry
          value={value}
          onChangeText={onUpdateValue}
          onFocus={() => {
            // setIsFocused(true);
            movePlaceholderTop();
          }}
          onBlur={() => {
            // setIsFocused(false);
            movePlaceholderCenter();
          }}
          keyboardShouldPersistTaps="handled"
        />
        <Animated.View
          style={[
            styles.animatedPlaceholderText,
            {
              transform: [{ translateY: topValue }],
              // transform: [{ translateY: -0.5 * placeholderHeight }],
            },
          ]}
        >
          <Text onLayout={handleTextLayout} style={styles.placeholderText}>
            {placeholder}
          </Text>
        </Animated.View>
        {icon === "eye" && ( // Render eye icon only if it's specified
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)} // Toggle showPassword state
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={size} />
          </TouchableOpacity>
        )}
        {icon !== "eye" && ( // Render other icons
          <View style={styles.iconContainer}>
            <Ionicons name={icon} size={size} />
          </View>
        )}
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {},
  animatedPlaceholderText: {
    position: "absolute",
    marginLeft: 20,
  },
  placeholderText: { color: "#B3B3B3", fontSize: 12 },
  label: {
    color: Colors.primary800,
    fontFamily: "poppins-semibold",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#B3B3B3",
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 350,
    fontSize: 15,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 12,
  },
});
