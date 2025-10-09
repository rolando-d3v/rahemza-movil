import { useTranslation } from "react-i18next";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useEffect, useState } from "react";
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
});
