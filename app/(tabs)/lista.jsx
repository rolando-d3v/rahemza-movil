import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

export default function Lista() {
  
  const { t } = useTranslation();

    return (
      <View
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: "#ccc" }}
      >
        <Text>lista</Text>
        <Text>{t('login')}</Text>
      </View>
    );
  
}
