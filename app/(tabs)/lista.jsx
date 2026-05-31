import { Text, View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { Link } from "expo-router";
import { Color } from "@/constants/color";

export default function Lista() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>lista</Text>
      <Text style={styles.loginText}>{t("login")}</Text>
      <Link href="/busqueda" style={styles.link}>
        lista
      </Link>
      <Link href="/login" style={styles.link}>
        login
      </Link>
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
  title: {
    color: Color.text_primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    color: Color.text_secondary,
    marginVertical: 8,
  },
  link: {
    color: Color.primary_color,
    marginVertical: 4,
  },
});
