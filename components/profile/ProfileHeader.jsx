import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color } from "@/constants/color";

export default function ProfileHeader({
  wallImageSource,
  profileImageSource,
  username = "",
  level = "",
  stats = [],
}) {
  return (
    <View>
      <View style={styles.wallContainer}>
        <Image source={wallImageSource} style={styles.wallImage} />
        <Image source={profileImageSource} style={styles.profileImage} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{username} </Text>
        {level ? <Text style={styles.level}>{level}</Text> : null}
      </View>

      {stats.length > 0 && (
        <View style={styles.statsRow}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statBox}>
              <Text style={styles.statNumber}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wallContainer: {
    height: 200,
    width: "100%",
  },
  wallImage: {
    height: 200,
    width: "100%",
    opacity: 0.7,
  },
  profileImage: {
    height: 100,
    width: 100,
    bottom: -50,
    right: 50,
    position: "absolute",
    padding: 10,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: Color.surface,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: Color.text_primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  level: {
    color: Color.text_primary,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#088dd8",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    overflow: "hidden",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e06b9c",
  },
  statLabel: {
    fontSize: 14,
    color: Color.text_primary,
  },
});
