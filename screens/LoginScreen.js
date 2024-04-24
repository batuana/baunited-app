import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthContent from "../components/Auth/AuthContent";
import CustomButton from "../components/UI/CustomButton";
import { Dimensions } from "react-native";

function LoginScreen() {
  return (
    <ScrollView style={styles.loginScreen} behavior="height">
      <LinearGradient
        colors={["#4393BF", "#59B9EF", "#e9ecee"]}
        locations={[0, 0.35, 1]}
        style={styles.linearGradientContainer}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/bau-logo.png")}
        />
        <Text style={styles.introductionText}>Welcome, Dear BAU Member!</Text>
        <AuthContent />
        <View style={styles.buttonContainer}>
          <CustomButton
            type="link"
            imageSource={require("../assets/images/umis-logo.png")}
            url="https://umis.bau.edu.tr/"
          ></CustomButton>
          <CustomButton
            type="link"
            imageSource={require("../assets/images/Itslearning-logo.png")}
            url="https://www.itslearning.com/"
          ></CustomButton>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    // flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  linearGradientContainer: {
    borderWidth: 2,
    borderColor: "green",
    flex: 1,
    height: Dimensions.get("screen").height,
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
    justifyContent: "space-between",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    gap: 50,
  },
});
