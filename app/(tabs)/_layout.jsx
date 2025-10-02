import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#fff",
        tabBarShowLabel: false, // Ocultar etiquetas por defecto
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={145}
            style={{
              width: "100%",
              height: 60,
              //   backgroundColor: "white",

              //   marginHorizontal: 10,
              borderRadius: 20,
              //   borderTopLeftRadius: 20,
              //   borderTopRightRadius: 20,
              overflow: "hidden",
              // marginBottom: 10,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer && styles.centerButton,
              ]}
            >
              <Ionicons
                name={`home${focused ? "" : "-outline"}`}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="lista"
        options={{
          title: "Lista",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer && styles.centerButton,
              ]}
            >
              <MaterialCommunityIcons
                name={`popcorn`}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer && styles.centerButton,
              ]}
            >
              <Ionicons name="add-circle-outline" size={36} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="movie"
        options={{
          title: "Movie",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer && styles.centerButton,
              ]}
            >
              <Ionicons name="business-outline" size={24} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer && styles.centerButton,
              ]}
            >
              <Ionicons
                name={`person${focused ? "" : "-outline"}`}
                size={24}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    // width: "100%",
    height: 60,
    // backgroundColor: "transparent",
    position: "absolute",
    bottom: 20,
    paddingBottom: 30,
    left: 20,
    right: 20,
    marginHorizontal: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
    elevation: 0,
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconContainer: {
    backgroundColor: "white",
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#555",
    // zIndex: 90,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,

    borderWidth: 5,
    // borderColor: "transparent", // Color para el borde flotante
    borderColor: "#1ca7ce", // Color para el borde flotante
    // borderColor: "#2d6a4f", // Color para el borde flotante
  },
});
