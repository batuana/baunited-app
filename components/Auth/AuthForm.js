import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import Checkbox from '../UI/Checkbox';
import { useState } from 'react';
import { Colors } from '../../constants/styles';
import Button from '../UI/Button';

function AuthForm() {
  const [isSelected, setIsSelected] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formContainer}>
      <Input
        label="Email"
        placeholder="Email"
        icon={{ name: 'mail', size: 24 }}
        value={email}
        onUpdateValue={setEmail}
      />
      <Input
        label="Password"
        secure={true}
        placeholder="Password"
        icon={{ name: 'eye', size: 24 }}
        value={password}
        onUpdateValue={setPassword}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontFamily: 'poppins-semibold',
    color: Colors.primary500,
  },
  passwordInputContainer: {},
});

export default AuthForm;
