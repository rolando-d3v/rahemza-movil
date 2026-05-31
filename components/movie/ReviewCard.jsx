import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color } from "@/constants/color";

export default function ReviewCard({
  reviewerName = "Anónimo",
  rating = 3,
  commentCount = 0,
  reviewText = "",
  avatarUri = "https://randomuser.me/api/portraits/men/32.jpg",
  onPressReadMore,
}) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
        <View>
          <Text style={styles.reviewerLabel}>
            Reseña de{" "}
            <Text style={styles.reviewerName}>{reviewerName}</Text>
          </Text>
          <Text style={styles.stars}>{stars}</Text>
        </View>
        <Text style={styles.commentCount}>💬 {commentCount}</Text>
      </View>

      <Text style={styles.reviewText} numberOfLines={4}>
        {reviewText}
      </Text>

      {onPressReadMore && (
        <TouchableOpacity style={styles.readMoreButton} onPress={onPressReadMore}>
          <Text style={styles.readMoreText}>Leer mas →</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewerLabel: {
    color: Color.text_primary,
    fontWeight: "600",
  },
  reviewerName: {
    color: Color.accent_purple,
  },
  stars: {
    color: Color.accent_red,
  },
  commentCount: {
    marginLeft: "auto",
    color: Color.text_muted,
  },
  reviewText: {
    color: Color.text_secondary,
    lineHeight: 20,
    fontSize: 12,
    textAlign: "justify",
    marginTop: 10,
  },
  readMoreButton: {
    marginTop: 10,
  },
  readMoreText: {
    color: Color.accent_purple,
    fontWeight: "600",
  },
});
