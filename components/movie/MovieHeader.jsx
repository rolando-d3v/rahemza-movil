import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color } from "@/constants/color";

export default function MovieHeader({ movie, posterSource }) {
  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <Image
          source={posterSource}
          style={styles.poster}
          contentFit="cover"
        />
        <Text style={styles.year}>{movie.year}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.detail}>Director: {movie.director} </Text>
        <Text style={styles.detail}>{movie.duration}</Text>
        <View style={styles.badgeRow}>
          <Text style={styles.badge}>Vistas</Text>
          <Text style={styles.badge}>Like</Text>
          <Text style={styles.badge}>Listas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  posterContainer: {
    width: 100,
    position: "relative",
  },
  poster: {
    width: 120,
    height: 170,
    borderRadius: 6,
    borderWidth: 0.25,
    borderColor: Color.text_primary,
  },
  year: {
    color: Color.text_primary,
    fontSize: 14,
    position: "absolute",
    top: 0,
    right: -60,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "65%",
  },
  title: {
    color: Color.text_primary,
    fontSize: 30,
    padding: 0,
  },
  detail: {
    color: Color.text_primary,
    fontSize: 14,
  },
  badgeRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  badge: {
    color: Color.surface,
    fontSize: 13,
    fontWeight: "bold",
    backgroundColor: Color.text_primary,
    paddingHorizontal: 4,
    borderRadius: 6,
    overflow: "hidden",
  },
});
