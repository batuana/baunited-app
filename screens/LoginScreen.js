import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AuthContent from "../components/Auth/AuthContent";
import LinkButton from "../components/UI/LinkButton";
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
        <Text style={styles.introductionText}>
          Welcome, Dear BAU Memberr!!!
        </Text>
        <AuthContent />
        <View style={styles.buttonContainer}>
          <LinkButton imageSource={require("../assets/images/umis-logo.png")} />
          <LinkButton
            onPress={async () => {
              await Linking.openURL("https://buei.itslearning.com/");
            }}
            imageSource={require("../assets/images/Itslearning-logo.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <LinkButton imageSource={require("../assets/images/umis-logo.png")} />
          <LinkButton
            onPress={async () => {
              await Linking.openURL("https://buei.itslearning.com/");
            }}
            imageSource={require("../assets/images/Itslearning-logo.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <LinkButton imageSource={require("../assets/images/umis-logo.png")} />
          <LinkButton
            onPress={async () => {
              await Linking.openURL("https://buei.itslearning.com/");
            }}
            imageSource={require("../assets/images/Itslearning-logo.png")}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    borderWidth: 2,
    borderColor: "red",
  },
  linearGradientContainer: {
    // flex: 1,
    // paddingHorizontal: 50,
    borderWidth: 2,
    borderColor: "green",
    // justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    borderWidth: 1,
    borderColor: "yellow",
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
