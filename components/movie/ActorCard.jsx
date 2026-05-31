import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color } from "@/constants/color";

export default function ActorCard({ name, character, imageSource }) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        {character && <Text style={styles.character}>{character}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 122,
    gap: 4,
    marginHorizontal: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Color.border,
  },
  name: {
    color: Color.text_primary,
    fontSize: 11,
    paddingHorizontal: 4,
    fontWeight: "700",
  },
  character: {
    color: Color.text_primary,
    fontWeight: "300",
    fontSize: 10,
    paddingHorizontal: 4,
  },
});
