import { Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native"; // ✅ Importa el hook
import { Link } from "expo-router";

export default function Lista() {
  const { t } = useTranslation();

  const navigation = useNavigation(); // ✅ Obtiene la instancia de navegación

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: "#ccc" }}
    >
      <Text>lista</Text>
      <Text>{t("login")}</Text>

      <TouchableOpacity onPress={() => navigation.push("login")}>
        <Text>login</Text>
      </TouchableOpacity>
   

      <Link href="/busqueda">lista</Link>
      <Link href="/login">login</Link>
    </View>
  );
}
