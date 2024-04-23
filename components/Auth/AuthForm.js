import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import Checkbox from "../Ui/Checkbox";
import { useState } from "react";
import { Colors } from "../../constants/styles";
import Button from "../Ui/Button";

function AuthForm() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.formContainer}>
      <Input
        label="Email"
        style={styles.emailInput}
        placeholder="Email"
        icon="mail"
        size={24}
      />
      <Input
        label="Password"
        secure={true}
        placeholder="Password"
        icon="eye"
        size={24}
      />
      <View style={styles.belowInputContainer}>
        <Checkbox
          text="Remember Me"
          isChecked={isSelected}
          onPress={() => {
            setIsSelected(!isSelected);
          }}
        />
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </View>
      <Button>Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 13,
  },
  belowInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontFamily: "poppins-semibold",
    color: Colors.primary500,
  },
  emailInput: {},
  passwordInputContainer: {},
});

export default AuthForm;
