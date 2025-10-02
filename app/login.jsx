import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log(user);

  const handleLogin = () => {
    if (email === "admin@demo.com" && password === "123456") {
      Alert.alert("✅ Login exitoso", "Bienvenido!");
      router.replace("/home"); // Navegar a Home
      // router.push("/home"); // Navegar a Home
    } else {
      Alert.alert("❌ Error", "Correo o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <Text className="mb-[30px] text-white font-bold text-[28px]">
        Iniciar Sesión
      </Text>

      <TextInput
        className="w-full h-[50px] p-[15px] mb-[15px] bg-white  rounded-[10px] border-[1px] border-[#fff]"
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        className="w-full h-[50px] p-[15px] mb-[15px] bg-white  rounded-[10px] border-[1px] border-[#fff]"
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        className="w-full h-[50px] bg-blue-500 rounded-[10px] justify-center items-center"
        onPress={handleLogin}
      >
        <Text className="text-white font-bold text-[18px]">Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#555",
  },
});
