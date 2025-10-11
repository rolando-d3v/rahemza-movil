import { Tabs } from "expo-router";
import { StyleSheet, View, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import avatar from "../../assets/images/profile/avatar1.png";

import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import logo from "../../assets/icons/rahemza.png";

import {Color} from '../../constants/color'


export default function Layout() {
  return (

    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#ccc",
        tabBarActiveTintColor: "#05CA79",
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0.4 }}
            style={{ flex: 1, opacity: 0.9 }}
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
              colors={[Color.primary_color,"#000"]}
              start={{ x: 0.1, y: 0 }}
              end={{ x: 0.1, y: 0.9 }}
              style={{ flex: 1 }}
            />
          ),
          headerLeft: () => (
            <Image
              source={avatar}
              style={{
                width: 30,
                height: 30,
                marginLeft: 15,
                borderRadius: 20,
              }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={24}
              color="white"
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
               
              }}
            />
          ),
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                minWidth: "100%",
                justifyContent: "center",
              
              
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                Rahemza
              </Text>
              <Image
                source={logo}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: 10,
                  borderRadius: 20,
                }}
              />
            </View>
          ),
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
          // headerShown: false,
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
  iconContainer: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  activeIconContainer: {
    backgroundColor: "white",
  },
  centerButton: {
    width: 70,
    height: 70,
    marginTop: -10,
  },
});

//  nota form de bar  flotante
// import { Tabs } from "expo-router";
// import { StyleSheet, View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { BlurView } from "expo-blur";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: styles.tabBar,
//         tabBarActiveTintColor: "#fff",
//         tabBarShowLabel: false, // Ocultar etiquetas por defecto
//         tabBarBackground: () => (
//           <BlurView
//             tint="dark"
//             intensity={145}
//             style={{
//               width: "100%",
//               height: 60,
//               //   backgroundColor: "white",

//               //   marginHorizontal: 10,
//               borderRadius: 20,
//               //   borderTopLeftRadius: 20,
//               //   borderTopRightRadius: 20,
//               overflow: "hidden",
//               // marginBottom: 10,
//             }}
//           />
//         ),
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, focused }) => (
//             <View
//               style={[
//                 styles.iconContainer,
//                 focused && styles.activeIconContainer && styles.centerButton,
//               ]}
//             >
//               <Ionicons
//                 name={`home${focused ? "" : "-outline"}`}
//                 size={24}
//                 color={color}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="lista"
//         options={{
//           title: "Lista",
//           tabBarIcon: ({ color, focused }) => (
//             <View
//               style={[
//                 styles.iconContainer,
//                 focused && styles.activeIconContainer && styles.centerButton,
//               ]}
//             >
//               <MaterialCommunityIcons
//                 name={`popcorn`}
//                 size={24}
//                 color={color}
//               />
//             </View>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="create"
//         options={{
//           title: "Create",
//           tabBarIcon: ({ color, focused }) => (
//             <View
//               style={[
//                 styles.iconContainer,
//                 focused && styles.activeIconContainer && styles.centerButton,
//               ]}
//             >
//               <Ionicons name="add-circle-outline" size={36} color={color} />
//             </View>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="movie"
//         options={{
//           title: "Movie",
//           tabBarIcon: ({ color, focused }) => (
//             <View
//               style={[
//                 styles.iconContainer,
//                 focused && styles.activeIconContainer && styles.centerButton,
//               ]}
//             >
//               <Ionicons name="business-outline" size={24} color={color} />
//             </View>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color, focused }) => (
//             <View
//               style={[
//                 styles.iconContainer,
//                 focused && styles.activeIconContainer && styles.centerButton,
//               ]}
//             >
//               <Ionicons
//                 name={`person${focused ? "" : "-outline"}`}
//                 size={24}
//                 color={color}
//               />
//             </View>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     height: 60,
//     position: "absolute",
//     bottom: 20,
//     paddingBottom: 30,
//     left: 20,
//     right: 20,
//     marginHorizontal: 10,
//     elevation: 0,
//     borderTopWidth: 0,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
//   iconContainer: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   activeIconContainer: {
//     backgroundColor: "white",
//   },
//   centerButton: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     backgroundColor: "#555",
//     // zIndex: 90,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: -30,

//     borderWidth: 5,
//     // borderColor: "transparent", // Color para el borde flotante
//     borderColor: "#1ca7ce", // Color para el borde flotante
//     // borderColor: "#2d6a4f", // Color para el borde flotante
//   },
// });
