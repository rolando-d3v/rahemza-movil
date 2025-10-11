import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { Color } from "../../../constants/color";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: Color.primary_color,
        tabBarShowIcon: true,
        tabBarInactiveTintColor: "#ccc",
        tabBarIndicatorStyle: { backgroundColor: Color.primary_color },
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{ title: "Inicio", headerShown: false }}
      />
      <MaterialTopTabs.Screen
        name="publicaciones"
        options={{ title: "Publicaciones", headerShown: false }}
      />
      <MaterialTopTabs.Screen
        name="busqueda"
        options={{ title: "Buscar", headerShown: false }}
      />
    </MaterialTopTabs>
  );
};

export default Layout;
