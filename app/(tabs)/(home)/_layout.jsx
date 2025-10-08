import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Oculta la barra con "index"
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="movie" options={{ headerShown: false }} />
      <Stack.Screen name="busqueda" options={{ headerShown: false }} />
    </Stack>
  );
}
