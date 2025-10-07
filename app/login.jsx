// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useDispatch, useSelector } from "react-redux";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);

//   console.log(user);

//   const handleLogin = () => {
//     if (email === "admin@demo.com" && password === "123456") {
//       Alert.alert("✅ Login exitoso", "Bienvenido!");
//       router.replace("/home"); // Navegar a Home
//       // router.push("/home"); // Navegar a Home
//     } else {
//       Alert.alert("❌ Error", "Correo o contraseña incorrectos");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text className="mb-[30px] text-white font-bold text-[28px]">
//         Iniciar Sesión
//       </Text>

//       <TextInput
//         className="w-full h-[50px] p-[15px] mb-[15px] bg-white  rounded-[10px] border-[1px] border-[#fff]"
//         placeholder="Correo electrónico"
//         keyboardType="email-address"
//         autoCapitalize="none"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <TextInput
//         className="w-full h-[50px] p-[15px] mb-[15px] bg-white  rounded-[10px] border-[1px] border-[#fff]"
//         placeholder="Contraseña"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TouchableOpacity
//         className="w-full h-[50px] bg-blue-500 rounded-[10px] justify-center items-center"
//         onPress={handleLogin}
//       >
//         <Text className="text-white font-bold text-[18px]">Ingresar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#555",
//   },
// });

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
// import { useAuthStore } from "../store/store";
// import { useAuthStore } from "../store/authStore";

import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const API_URL = "http://localhost:3000";

export default function LoginScreen() {
  const [loading, setLoading] = React.useState(false);
  // const { setUser, checkAuth } = useAuthStore();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "YOUR_CLIENT_ID",
    iosClientId: "YOUR_CLIENT_ID",
    webClientId: "YOUR_CLIENT_ID",
    // redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    // scopes: ["profile", "email"],
  });

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);

      // Abrir el navegador para autenticación
      const result = await WebBrowser.openAuthSessionAsync(
        `${API_URL}/api/auth/sign-in/social?provider=google`,
        AuthSession.makeRedirectUri({ useProxy: true })
      );

      if (result.type === "success") {
        // Después del login, verificar sesión
        // await checkAuth();
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#4285F4" />
      ) : (
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <Text style={styles.buttonText}>Continuar con Google 2</Text>
        </TouchableOpacity>
      )}

      <Pressable
        style={styles.googleButton}
        onPress={() => promptAsync().catch((e) => console.error("error", e))}
      >
        <Text>Login con Google 3</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  googleButton: {
    backgroundColor: "#4285F4",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    minWidth: 250,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
