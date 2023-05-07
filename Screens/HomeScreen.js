import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Button title="Services"></Button>
      <Button title="Contact us"></Button>
      <Button title="About us"></Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4",
    alignItems: "center",
    color: "#ff4",
    justifyContent: "center",
  },
  tesla: {
    color: "#880808",
    fontWeight: "800",
    // backgroundColor: "#00000",
  },
});
