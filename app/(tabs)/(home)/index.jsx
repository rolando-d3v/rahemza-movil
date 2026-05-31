import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { Color } from "@/constants/color";
import SocialPostCard from "@/components/social/SocialPostCard";
import FilmCarousel from "@/components/movie/FilmCarousel";

import vengadores from "@/assets/images/social/vengadores.jpg";
import social2 from "@/assets/images/social/social2.jpg";
import social3 from "@/assets/images/social/social3.jpg";

const favoriteFilms = [
  { id: 1, title: "The Apartment" },
  { id: 2, title: "Dr. Strangelove" },
  { id: 3, title: "Solaris" },
  { id: 4, title: "The King of Comedy" },
  { id: 5, title: "The King of Comedy" },
  { id: 6, title: "The King of Comedy" },
];

const socialPosts = [
  { id: 1, title: "The Apartment", img: social2 },
  { id: 2, title: "Dr. Strangelove", img: social3 },
  { id: 3, title: "Solaris", img: social2 },
  { id: 4, title: "The King of Comedy", img: vengadores },
];

export default function HomeScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView contentContainerStyle={styles.container} vertical>
      <View style={styles.content}>
        <FilmCarousel
          title="Top de semana"
          films={favoriteFilms}
          renderImage={() => require("@/assets/images/movie/corazon.jpg")}
        />

        <View style={styles.searchContainer}>
          <Link href="/busqueda">
            <View style={styles.searchBar}>
              <Text style={styles.searchText}>Buscar</Text>
              <FontAwesome5 name="search" size={22} color={Color.surface} />
            </View>
          </Link>
        </View>

        <Text style={styles.sectionTitle}>Publicaciones Amigos</Text>

        {socialPosts.map((post) => (
          <SocialPostCard
            key={post.id}
            username="mosseri"
            subtitle="Audio original"
            avatarUri="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            imageSource={post.img}
            caption="Marvel Cinematic Universe para ver en el cine"
            likes="8k"
            comments="1k"
            shares={560}
            isVerified={true}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.background,
  },
  content: {
    flex: 1,
    backgroundColor: Color.background,
  },
  searchContainer: {
    width: "100%",
    marginVertical: 10,
    marginHorizontal: "auto",
  },
  searchBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: Color.text_secondary,
    marginHorizontal: "auto",
    height: 40,
  },
  searchText: {
    color: Color.surface,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.text_primary,
    marginTop: 20,
    paddingHorizontal: 6,
  },
});
