import { Provider } from "react-redux";
import { Stack } from "expo-router";
import { store } from "../store/store";
import "../global.css";
import "@/i18n";

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerShown: false, // Oculta la barra con "index"
          }}
        >
          <Stack.Screen name="movie" />
        </Stack>
      </Provider>
    </>
  );
}
