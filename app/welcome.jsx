import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color } from "@/constants/color";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VistaScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.azul_oscuro,
  },
  text: {
    color: Color.text_primary,
    fontSize: 18,
  },
});
