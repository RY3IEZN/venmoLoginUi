/** @format */

import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Image source={require("../assets/logo.png")} />
        <Text>Vermo</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity style={[styles.socialbtns, styles.shadow]}>
          <Image
            style={{ margin: 10 }}
            source={require("../assets/facebook.png")}
          />
          <Text>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialbtns, styles.shadow]}>
          <Image
            style={{ margin: 10 }}
            source={require("../assets/google.png")}
          />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: "#abb4bd",
            textAlign: "center",
            marginBottom: 50,
          }}
        >
          Or
        </Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput placeholder="Email" />
          <View
            style={{
              colour: "black",
              width: "95%",
              marginHorizontal: 5,
              borderBottomWidth: 1,
            }}
          ></View>
          <TextInput placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              colour: "black",
              width: "95%",
              marginHorizontal: 5,
              borderBottomWidth: 1,
            }}
          ></View>
        </View>
      </View>

      <Text
        style={{
          color: "#ff1654",
          textAlign: "right",
          marginHorizontal: 28,
          fontSize: 17,
          fontWeight: "500",
        }}
      >
        Forgot Password?
      </Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={[styles.loginbtn, styles.shadow]}>
          <Text style={{ fontWeight: "700", color: "white", fontSize: 20 }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#abb4bd" }}>
          Dont have an account?{" "}
          <Text
            style={{
              color: "#ff1654",
              marginHorizontal: 20,
              fontWeight: "500",
            }}
          >
            Register Now
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginbtn: {
    backgroundColor: "#ff1654",
    borderRadius: 4,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "86%",
  },
  shadow: {
    elevation: 5,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: { width: 50, height: 100 },
    shadowColor: "blue",
  },
  socialbtns: {
    height: 40,
    width: "40%",
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    paddingTop: 50,
  },
});

export default LoginScreen;
