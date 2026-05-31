import { Text, View, StyleSheet } from "react-native";
import { Color } from "@/constants/color";

export default function Create() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>create</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.background,
  },
  text: {
    color: Color.text_primary,
  },
});
