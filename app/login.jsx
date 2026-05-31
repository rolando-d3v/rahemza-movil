import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { Color } from "@/constants/color";
import { login } from "@/store/slice/userSlice";
import loginBg from "@/assets/images/login_bg.png";
import { useRouter } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const { height } = Dimensions.get("window");

const API_URL = "http://localhost:3000";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      
      // Login inmediato por Redux para desarrollo (según requerimiento de bypass)
      dispatch(
        login({
          name: "Lando Google",
          email: "landon@google.com",
        })
      );
      router.replace("/(tabs)");

      /* 
      // Descomentar para producción con servidor local:
      const result = await WebBrowser.openAuthSessionAsync(
        `${API_URL}/api/auth/sign-in/social?provider=google`,
        AuthSession.makeRedirectUri({ useProxy: true })
      );
      if (result.type === "success") {
        // Verificar sesión de usuario
      }
      */
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={loginBg}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <LinearGradient
        colors={[
          "rgba(0,0,0,0.3)",
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0.8)",
          "#000",
        ]}
        locations={[0, 0.3, 0.6, 1]}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            {/* Header: Logo estilo Netflix */}
            <View style={styles.header}>
              <Text style={styles.logoText}>RAHEMZA</Text>
            </View>

            {/* Contenido principal */}
            <View style={styles.content}>
              <Text style={styles.headline}>
                Películas y series ilimitadas
              </Text>
              <Text style={styles.subheadline}>
                Disfruta donde quieras. Cancela cuando quieras.
              </Text>

              <View style={styles.ctaContainer}>
                {loading ? (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={Color.primary_color} />
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleLogin}
                    disabled={loading}
                    activeOpacity={0.8}
                  >
                    <Ionicons
                      name="logo-google"
                      size={22}
                      color="#fff"
                      style={styles.googleIcon}
                    />
                    <Text style={styles.googleButtonText}>
                      Iniciar sesión con Google
                    </Text>
                  </TouchableOpacity>
                )}

                <Text style={styles.termsText}>
                  Al iniciar sesión, aceptas nuestros{" "}
                  <Text style={styles.termsLink}>Términos de uso</Text> y{" "}
                  <Text style={styles.termsLink}>Política de privacidad</Text>.
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    minHeight: height,
  },
  header: {
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 60 : 40,
    paddingHorizontal: 24,
  },
  logoText: {
    fontSize: 42,
    fontWeight: "900",
    color: Color.primary_color,
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: Platform.OS === "ios" ? 50 : 40,
  },
  headline: {
    fontSize: 32,
    fontWeight: "bold",
    color: Color.text_primary,
    textAlign: "center",
    marginBottom: 12,
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    lineHeight: 40,
  },
  subheadline: {
    fontSize: 18,
    color: Color.text_muted,
    textAlign: "center",
    marginBottom: 32,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    lineHeight: 26,
    paddingHorizontal: 10,
  },
  ctaContainer: {
    width: "100%",
    alignSelf: "center",
    maxWidth: 400,
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: Color.primary_color,
    borderRadius: 6,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: Color.primary_color,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: "0px 5px 15px rgba(5, 202, 121, 0.4)",
        cursor: "pointer",
      },
    }),
  },
  googleIcon: {
    marginRight: 12,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  loadingContainer: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  termsText: {
    color: Color.text_muted,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  termsLink: {
    color: Color.primary_color,
    fontWeight: "600",
  },
});
