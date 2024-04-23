import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AuthContent from '../components/Auth/AuthContent';

function LoginScreen() {
  return (
    <View style={styles.loginScreen}>
      <LinearGradient
        colors={['#4393BF', '#59B9EF', '#e9ecee']}
        locations={[0, 0.35, 1]}
        style={styles.linearGradientContainer}
      >
        <Image style={styles.logo} source={require('../assets/bau-logo.png')} />
        <Text style={styles.introductionText}>Welcome, Dear BAU Member!</Text>
        <AuthContent />
      </LinearGradient>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
  },
  linearGradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 270,
    height: 100,
    borderWidth: 2,
    borderColor: 'red',
  },
  introductionText: {
    fontSize: 32,
    fontFamily: 'poppins-semibold',
    borderWidth: 2,
    borderColor: 'red',
  },
});
