import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';

function AuthForm() {
  return (
    <View style={styles.formContainer}>
      <Input label="Email" style={styles.emailInput} placeholder="Email" />

      <Input label="Password" secure={true} placeholder="Password" />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderWidth: 2,
    borderColor: 'purple',
    gap: 13,
  },
  emailInput: {},
  passwordInputContainer: {},
});

export default AuthForm;
