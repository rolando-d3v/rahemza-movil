import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization"; // 👈 reemplazo correcto
import AsyncStorage from "@react-native-async-storage/async-storage";

import ing from "./language/ing.json";
import esp from "./language/esp.json";

const resources = {
  "es-ES": { translation: esp },
  "en-US": { translation: ing },
};

const initI18n = async () => {
  try {


    let savedLanguage = Localization.getLocales()[0].languageTag;
    console.log(savedLanguage);
    console.log(savedLanguage);
    // let savedLanguage = await AsyncStorage.getItem("language");

    // if (!savedLanguage) {
    //   // Ejemplo: "es-PE" → "es"
    //   savedLanguage = Localization.locale.split("-")[0];
    // }

    await i18n.use(initReactI18next).init({
      compatibilityJSON: "v3",
      resources,
      // lng: "en-US",
      lng: savedLanguage,
      fallbackLng: "en", // 👈 mejor usar inglés como fallback
      interpolation: {
        escapeValue: false,
      },
    });
  } catch (error) {
    console.error("Error al inicializar i18n:", error);
  }
};

initI18n();

export default i18n;