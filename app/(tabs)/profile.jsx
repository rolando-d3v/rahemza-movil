import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Color } from "@/constants/color";
import ProfileHeader from "@/components/profile/ProfileHeader";
import FilmCarousel from "@/components/movie/FilmCarousel";

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

export default function ProfileScreen() {
  const stats = [
    { value: "455", label: "Total Films" },
    { value: "33", label: "Film This Year" },
    { value: "4", label: "Lists" },
    { value: "30", label: "Review" },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ProfileHeader
        wallImageSource={require("@/assets/images/profile/3.jpg")}
        profileImageSource={require("@/assets/icons/rahemza.png")}
        username="Rolando"
        level="Legendario 2"
        stats={stats}
      />

      <FilmCarousel
        title="Favorite Films"
        films={favoriteFilms}
        renderImage={() => require("@/assets/images/movie/titanic.jpg")}
      />

      <FilmCarousel
        title="Films Favoritos"
        films={favoriteFilms}
        renderImage={() => require("@/assets/images/movie/corazon.jpg")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.azul_oscuro,
  },
});




