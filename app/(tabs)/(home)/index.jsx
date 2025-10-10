import { useTranslation } from "react-i18next";
import { BlurView } from "expo-blur";
import { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import logo from "../../../assets/icons/rahemza.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";

import vengadores from "../../../assets/images/social/vengadores.jpg";
import social2 from "../../../assets/images/social/social2.jpg";
import social3 from "../../../assets/images/social/social3.jpg";
// import i18n from "@/i18n";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 3;

export default function HomeScreen() {
  const { t } = useTranslation();
  // const currentLanguage = i18n.language;

  const [movie, setMovie] = useState({
    title: "Titanic",
    director: "James Cameron",
    duration: "195 min",
    year: "1997",
  });

  const favoriteFilms = [
    {
      id: 1,
      title: "The Apartment",
      poster: "https://m.media-amazon.com/images/M/MV5BM...jpg",
    },
    {
      id: 2,
      title: "Dr. Strangelove",
      poster: "https://m.media-amazon.com/images/M/MV5BM...jpg",
    },
    {
      id: 3,
      title: "Solaris",
      poster: "https://m.media-amazon.com/images/M/MV5BM...jpg",
    },
    {
      id: 4,
      title: "The King of Comedy",
      poster: "https://m.media-amazon.com/images/M/MV5BM...jpg",
    },
    {
      id: 5,
      title: "The King of Comedy",
      poster: "https://m.media-amazon.com/images/M/MV5BM...jpg",
    },
    {
      id: 6,
      title: "The King of Comedy",
      poster: "https://m.media-amazon.com/images/M/MV5BM...jpg",
    },
  ];

  const social = [
    {
      id: 1,
      title: "The Apartment",
      img: social2,
    },
    {
      id: 2,
      title: "Dr. Strangelove",
      img: social3,
    },
    {
      id: 3,
      title: "Solaris",
      img: social2,
    },
    {
      id: 4,
      title: "The King of Comedy",
      img: vengadores,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const tabScrollRef = useRef(null);

  const tabs = ["Films", "Reviews", "Lists", "Journal"];

  const handleTabPress = (index) => {
    setActiveTab(index);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      vertical
      // showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, backgroundColor: "#0a0a0d" }}>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
            marginTop: 40,
            gap: 8,
            marginHorizontal: "auto",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff" }}>
            Rahemza
          </Text>
          <Image source={logo} style={{ width: 32, height: 32 }} />
        </View>

        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>Letterboxd</Text>
          </View>

          {/* Tabs */}
          <View style={styles.tabContainer}>
            <ScrollView
              ref={tabScrollRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabScrollContent}
            >
              {tabs.map((tab, index) => (
                <TouchableOpacity
                  key={tab}
                  onPress={() => handleTabPress(index)}
                  style={styles.tab}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === index && styles.activeTabText,
                    ]}
                  >
                    {tab}
                  </Text>
                  {tab === "Journal" && <View style={styles.notificationDot} />}
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Active tab indicator */}
            <View style={styles.indicatorContainer}>
              <View
                style={[
                  styles.indicator,
                  {
                    left: activeTab * (width / 4),
                    width: width / 4,
                  },
                ]}
              />
            </View>
          </View>

          {/* Content */}
          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {/* Popular this week */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular this week</Text>
                <Text style={styles.chevron}>›</Text>
              </View>
            </View>

            {/* Additional content placeholder */}
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>
                More content would appear here
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>

        <View style={styles.titleContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#fff",
              marginVertical: 10,
            }}
          >
            Top de semana
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favoriteFilms?.map((film) => (
              <View
                key={film.id}
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: 100,
                  gap: 4,
                  marginHorizontal: 4,
                }}
              >
                <Image
                  key={film.id}
                  // source={img}
                  source={require("@/assets/images/movie/corazon.jpg")}
                  // source={film?.poster}
                  // source={{ uri: actor.img }}
                  style={{
                    width: 100,
                    height: 150,
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 4,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 10,
                    textAlign: "center",
                    paddingHorizontal: 4,
                    borderRadius: 6,
                  }}
                >
                  {film.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            width: "100%",
            marginVertical: 10,
            marginHorizontal: "auto",
          }}
        >
          <Link href="/busqueda">
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // gap: 20,
                paddingVertical: 4,
                paddingHorizontal: 8,
                borderRadius: 6,
                backgroundColor: "#ccc",
                marginHorizontal: "auto",
                height: 40,
              }}
            >
              <Text>Buscar</Text>
              <FontAwesome5 name="search" size={22} color="black" />
            </View>
          </Link>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "#fff",
            marginTop: 20,
            paddingHorizontal: 6,
          }}
        >
          Publicaciones Amigos
        </Text>

        {social?.map((social) => {
          return (
            <View
              key={social.id}
              style={{
                marginVertical: 10,
                marginHorizontal: "auto",
                width: "100%",
                backgroundColor: "#000",
                borderRadius: 6,
                padding: 8,
              }}
            >
              <View style={styles.container_header}>
                <View style={styles.header}>
                  <View style={styles.profileSection}>
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
                      }}
                      style={styles.avatar}
                    />
                    <View style={styles.userInfo}>
                      <View style={styles.nameContainer}>
                        <Text style={styles.name}>mosseri</Text>
                        <View style={styles.verifiedBadge}>
                          <Text style={styles.checkmark}>✓</Text>
                        </View>
                      </View>
                      <Text style={styles.subtitle}>Audio original</Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileButtonText}>Ver perfil</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ width: "100%", height: 200 }}>
                <Image
                  source={social?.img}
                  contentFit="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <Text style={{ fontSize: 13, fontWeight: 400, color: "#fff" }}>
                Marvel Cinematic Universe para ver en el cine
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Octicons name="heart-fill" size={24} color="white" />
                  <Text
                    style={{ fontSize: 14, fontWeight: "300", color: "#fff" }}
                  >
                    8k
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <MaterialIcons name="sms" size={24} color="white" />

                  <Text
                    style={{ fontSize: 14, fontWeight: "300", color: "#fff" }}
                  >
                    1k
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Ionicons name="arrow-redo" size={24} color="white" />
                  <Text
                    style={{ fontSize: 14, fontWeight: "300", color: "#fff" }}
                  >
                    560
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#0a0a0d",
    // alignItems: "center",
    // justifyContent: "center",
    // width: "100%",
    // height: "100%",
  },

  container_header: {
    backgroundColor: "#000",
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
    color: "#fff",
    marginRight: 4,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#0095f6",
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    color: "#ccc",
    marginTop: 2,
  },
  profileButton: {
    backgroundColor: "#0095f6",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  profileButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  container_tab: {
    flex: 1,
    backgroundColor: "#000",
  },
  header_tab: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
    alignItems: "center",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 0.5,
  },
  tabContainer: {
    backgroundColor: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#1f1f1f",
  },
  tabScrollContent: {
    paddingHorizontal: 0,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    position: "relative",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
  },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ff6b35",
  },
  indicatorContainer: {
    position: "relative",
    height: 4,
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    height: 4,
    backgroundColor: "#00e054",
  },
  content: {
    flex: 1,
    backgroundColor: "#000",
  },
  section: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  chevron: {
    fontSize: 32,
    color: "#666",
    fontWeight: "300",
  },
  movieGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  movieCard: {
    width: CARD_WIDTH,
    aspectRatio: 2 / 3,
    borderRadius: 6,
    overflow: "hidden",
  },
  moviePoster: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1a1a1a",
  },
  placeholder: {
    paddingVertical: 48,
    alignItems: "center",
  },
  placeholderText: {
    fontSize: 14,
    color: "#666",
  },
});
