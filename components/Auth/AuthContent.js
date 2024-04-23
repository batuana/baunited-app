import { View, StyleSheet, Text } from 'react-native';
import AuthForm from './AuthForm';
import { Colors } from '../../constants/styles';

function AuthContent() {
  return (
    <View style={styles.container}>
      <AuthForm />
      <View style={styles.textContainer}>
        <Text style={{ fontFamily: 'poppins-semibold' }}>Don't have an account?</Text>
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 80,
  },
  textContainer: {
    flexDirection: 'row', // Yatay yönde sıralama
    justifyContent: 'center', // İçerikleri merkezde hizalama
  },
  signUpText: {
    fontFamily: 'poppins-semibold',
    marginLeft: 30,
    color: Colors.primary500,
  },
});

export default AuthContent;
