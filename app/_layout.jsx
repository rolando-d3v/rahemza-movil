import "../global.css";
import { StatusBar } from "expo-status-bar";

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false, // Oculta la barra con "index"
        }}
      />
      <StatusBar style="dark" />
    </>
  );
}
