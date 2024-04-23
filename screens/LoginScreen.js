import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthContent from "../components/Auth/AuthContent";
import LinkButton from "../components/Ui/LinkButton";

function LoginScreen() {
  return (
    <View style={styles.loginScreen}>
      <LinearGradient
        colors={["#4393BF", "#59B9EF", "#e9ecee"]}
        locations={[0, 0.35, 1]}
        style={styles.linearGradientContainer}
      >
        <Image style={styles.logo} source={require("../assets/bau-logo.png")} />
        <Text style={styles.introductionText}>Welcome, Dear BAU Member!</Text>
        <AuthContent />
        <View style={styles.buttonContainer}>
          <LinkButton text="UMIS" imageSource={require("../assets/umis.png")} />
          <LinkButton
            text="ItsLearning"
            imageSource={require("../assets/itslearning.png")}
          />
        </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 100,
    marginBottom: 20,
  },
  introductionText: {
    fontSize: 32,
    fontFamily: "poppins-semibold",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
});
