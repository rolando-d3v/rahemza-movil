import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { Stack } from "expo-router";
import { store } from "../store/store";
import "../global.css";

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerShown: false, // Oculta la barra con "index"
          }}
        />
        <StatusBar style="light" />
      </Provider>
    </>
  );
}
