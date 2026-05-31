import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { Collapsible } from "@/components/ui/collapsible";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { useLocalSearchParams, Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { Color } from "@/constants/color";
import MovieHeader from "@/components/movie/MovieHeader";
import ReviewCard from "@/components/movie/ReviewCard";
import ActorCard from "@/components/movie/ActorCard";

const img = require("@/assets/images/movie/titanic.jpg");

const actors = [
  { id: 1, name: "K. Winslet", character: "Rose", img: require("@/assets/images/actores/kate.jpg") },
  { id: 2, name: "L. DiCaprio", character: "Jack", img: require("@/assets/images/actores/leonardo.jpg") },
  { id: 3, name: "K. Winslet", character: "Rose", img: require("@/assets/images/actores/kate.jpg") },
  { id: 4, name: "L. DiCaprio", character: "Jack", img: require("@/assets/images/actores/leonardo.jpg") },
  { id: 5, name: "K. Winslet", character: "Rose", img: require("@/assets/images/actores/kate.jpg") },
  { id: 6, name: "L. DiCaprio", character: "Jack", img: require("@/assets/images/actores/leonardo.jpg") },
];

const BUTTON_WIDTH = 126;
const BUTTON_HEIGHT = 50;

const reviewText =
  'Hace menos de tres años, la película de Todd Phillips, de presupuesto medio pero gran éxito, "Joker", apuntaba amenazadoramente hacia un futuro en el que las películas de superhéroes de todos los tamaños se volverían tan comunes en el cine moderno que ya no tendrían que ser películas de superhéroes en absoluto...';

export default function Movie() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { id } = useLocalSearchParams();
  const [movie] = useState({
    title: "Titanic",
    director: "James Cameron",
    duration: "195 min",
    year: "1997",
  });

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  const handlePress = () => {
    // Action when playing trailer
  };

  return (
    <ParallaxScrollView
      color_content={Color.background}
      headerImage={
        <View style={styles.headerImageContainer}>
          <Image source={img} style={styles.headerImage} />
          <LinearGradient
            colors={[
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.overlay,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 0.8 }}
            style={styles.gradientOverlay}
          />
          <LinearGradient
            colors={[
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.transparent,
              Color.overlay_dark,
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.1, y: 1.05 }}
            style={[styles.gradientOverlay, { opacity: 0.9 }]}
          />
          <TouchableOpacity
            style={styles.trailerButton}
            onPress={handlePress}
          >
            <AntDesign name="play-circle" size={32} color={Color.text_primary} />
            <Text style={styles.trailerButtonText}>Ver Trailer</Text>
          </TouchableOpacity>
        </View>
      }
    >
      <MovieHeader movie={movie} posterSource={img} />

      <View>
        <Collapsible title="Resumen del Película" color_text={Color.text_primary}>
          <Text style={styles.summaryText}>
            Jack es un joven artista que gana un pasaje para viajar a América en
            el Titanic, el transatlántico más grande y seguro jamás construido.
            A bordo del buque conoce a Rose, una chica de clase alta que viaja
            con su madre y su prometido Cal, un millonario engreído a quien solo
            interesa el prestigio de la familia de su prometida. Jack y Rose se
            enamoran a pesar de las trabas que ponen la madre de ella y Cal en
            su relación. Mientras, el lujoso transatlántico se acerca a un
            inmenso iceberg.{" "}
          </Text>
        </Collapsible>

        <View style={styles.tabsRow}>
          {["Actores", "Elenco", "Detalles"].map((tab, index) => (
            <TouchableOpacity key={index} style={styles.tabItem}>
              <Text
                style={[
                  styles.tabText,
                  tab === "Actores" && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
              {tab === "Actores" && <View style={styles.tabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {actors.map((actor) => (
            <ActorCard
              key={actor.id}
              name={actor.name}
              character={actor.personaje}
              imageSource={actor.img}
            />
          ))}
        </ScrollView>

        <View style={styles.reviewsHeader}>
          <Text style={styles.reviewsTitle}>Reseñas</Text>
          <TouchableOpacity>
            <Text style={styles.reviewsSeeAll}>Ver todo</Text>
          </TouchableOpacity>
        </View>

        <ReviewCard
          reviewerName="David"
          rating={3}
          commentCount={5}
          reviewText={reviewText}
          onPressReadMore={() => {}}
        />
        <ReviewCard
          reviewerName="David"
          rating={3}
          commentCount={5}
          reviewText={reviewText}
          onPressReadMore={() => {}}
        />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    contentFit: "cover",
  },
  gradientOverlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  trailerButton: {
    position: "absolute",
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    top: "50%",
    left: "50%",
    backgroundColor: Color.overlay,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: -(BUTTON_HEIGHT / 2),
    marginLeft: -(BUTTON_WIDTH / 2),
    flexDirection: "row",
    gap: 6,
    padding: 4,
    borderWidth: 1,
    borderColor: Color.border,
  },
  trailerButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: Color.text_primary,
  },
  summaryText: {
    color: Color.text_primary,
    fontSize: 12,
    textAlign: "justify",
    paddingRight: 20,
  },
  tabsRow: {
    flexDirection: "row",
    marginVertical: 20,
  },
  tabItem: {
    marginRight: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.text_muted,
  },
  tabTextActive: {
    color: Color.text_primary,
  },
  tabIndicator: {
    height: 3,
    backgroundColor: Color.accent_purple,
    borderRadius: 2,
    marginTop: 4,
  },
  reviewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.text_primary,
  },
  reviewsSeeAll: {
    color: Color.accent_purple,
    fontWeight: "600",
  },
});

