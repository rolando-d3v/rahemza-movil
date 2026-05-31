import { Tabs, Redirect } from "expo-router";
import { StyleSheet, View, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "@/constants/color";
import avatar from "@/assets/images/profile/avatar1.png";
import logo from "@/assets/icons/rahemza.png";

export default function Layout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Color.text_secondary,
        tabBarActiveTintColor: Color.primary_color,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <LinearGradient
            colors={[Color.transparent, Color.overlay_dark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.4 }}
            style={styles.tabBarGradient}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerBackground: () => (
            <LinearGradient
              colors={[Color.primary_color, Color.surface]}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 0.1, y: 0.9 }}
              style={styles.headerGradient}
            />
          ),
          headerLeft: () => (
            <Image source={avatar} style={styles.headerAvatar} />
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={24}
              color={Color.text_primary}
              style={styles.headerSettingsIcon}
            />
          ),
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Text style={styles.headerTitleText}>Rahemza</Text>
              <Image source={logo} style={styles.headerLogo} />
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
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
                focused && styles.activeIconContainer,
              ]}
            >
              <MaterialCommunityIcons
                name="popcorn"
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
                focused && styles.activeIconContainer,
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
                focused && styles.activeIconContainer,
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
                focused && styles.activeIconContainer,
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
    position: "absolute",
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarGradient: {
    flex: 1,
    opacity: 0.9,
  },
  headerGradient: {
    flex: 1,
  },
  headerAvatar: {
    width: 30,
    height: 30,
    marginLeft: 15,
    borderRadius: 20,
  },
  headerSettingsIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: "100%",
    justifyContent: "center",
  },
  headerTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.text_primary,
  },
  headerLogo: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 20,
  },
  iconContainer: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconContainer: {
    backgroundColor: Color.text_primary,
    width: 70,
    height: 70,
    marginTop: -10,
  },
});
