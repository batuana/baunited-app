import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, Animated, TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/styles';
import { Ionicons } from '@expo/vector-icons';

function Input({ label, secure, value, onUpdateValue, placeholder, icon }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const topValue = useRef(new Animated.Value(0)).current;

  const movePlaceholder = offset => {
    Animated.timing(topValue, {
      toValue: offset,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={!showPassword && secure} // Dynamic secureTextEntry
          value={value}
          onChangeText={onUpdateValue}
          onFocus={() => {
            movePlaceholder(-15);
          }}
          onBlur={() => {
            if (value === '') movePlaceholder(0);
          }}
          keyboardShouldPersistTaps="handled"
        />
        <Animated.View
          style={[
            styles.animatedPlaceholderTextContainer,
            {
              transform: [{ translateY: topValue }],
            },
          ]}
          pointerEvents="none"
        >
          <Animated.Text style={styles.placeholderText}>{placeholder}</Animated.Text>
        </Animated.View>
        {icon.name === 'eye' && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={icon.size} />
          </TouchableOpacity>
        )}
        {icon.name !== 'eye' && (
          <View style={styles.iconContainer}>
            <Ionicons name={icon.name} size={icon.size} />
          </View>
        )}
        <View></View>
      </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {},
  animatedPlaceholderTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  placeholderText: { color: '#B3B3B3', fontSize: 14, marginLeft: 20 },
  label: {
    color: Colors.primary800,
    fontFamily: 'poppins-semibold',
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#B3B3B3',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 350,
    fontSize: 15,
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    right: 20,
  },
});
