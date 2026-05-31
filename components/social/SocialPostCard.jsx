import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Color } from "@/constants/color";

export default function SocialPostCard({
  username = "usuario",
  subtitle = "Audio original",
  avatarUri,
  imageSource,
  caption = "",
  likes = 0,
  comments = 0,
  shares = 0,
  isVerified = false,
  onPressProfile,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
          <View style={styles.userInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{username}</Text>
              {isVerified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              )}
            </View>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.profileButton} onPress={onPressProfile}>
          <Text style={styles.profileButtonText}>Ver perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.postImage} />
      </View>

      {caption ? <Text style={styles.caption}>{caption}</Text> : null}

      <View style={styles.actionsRow}>
        <View style={styles.actionItem}>
          <Octicons name="heart-fill" size={24} color={Color.text_primary} />
          <Text style={styles.actionText}>{likes}</Text>
        </View>
        <View style={styles.actionItem}>
          <MaterialIcons name="sms" size={24} color={Color.text_primary} />
          <Text style={styles.actionText}>{comments}</Text>
        </View>
        <View style={styles.actionItem}>
          <Ionicons name="arrow-redo" size={24} color={Color.text_primary} />
          <Text style={styles.actionText}>{shares}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: "auto",
    width: "100%",
    backgroundColor: Color.surface,
    borderRadius: 6,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 5,
    backgroundColor: "#424242",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.text_primary,
    marginRight: 4,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Color.accent_blue,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    color: Color.text_primary,
    fontSize: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    color: Color.text_secondary,
    marginTop: 2,
  },
  profileButton: {
    backgroundColor: Color.accent_blue,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  profileButtonText: {
    color: Color.text_primary,
    fontSize: 14,
    fontWeight: "600",
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  caption: {
    fontSize: 13,
    fontWeight: "400",
    color: Color.text_primary,
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "300",
    color: Color.text_primary,
  },
});
