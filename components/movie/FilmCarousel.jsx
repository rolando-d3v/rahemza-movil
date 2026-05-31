import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color } from "@/constants/color";

export default function FilmCarousel({ title, films = [], renderImage }) {
  return (
    <View>
      {title ? <Text style={styles.sectionTitle}>{title}</Text> : null}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={140}
        horizontal
      >
        <View style={styles.filmRow}>
          {films.map((film, index) => (
            <View
              key={film.id || index}
              style={[
                styles.filmPosterView,
                index === 0 && styles.firstItem,
                index === films.length - 1 && styles.lastItem,
              ]}
            >
              <Image
                source={renderImage ? renderImage(film) : film.poster}
                transition={300}
                style={styles.filmPoster}
                contentFit="cover"
              />
              {film.title ? (
                <Text style={styles.filmTitle}>{film.title}</Text>
              ) : null}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Color.text_primary,
    textAlign: "center",
  },
  scrollContent: {
    paddingVertical: 20,
  },
  filmRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 16,
  },
  filmPosterView: {
    width: 115,
    height: 180,
    marginRight: 12,
    borderRadius: 8,
  },
  firstItem: {
    marginLeft: 0,
  },
  lastItem: {
    marginRight: -12,
  },
  filmPoster: {
    width: 110,
    height: 180,
    borderRadius: 8,
    backgroundColor: Color.border,
  },
  filmTitle: {
    color: Color.text_primary,
    fontSize: 10,
    textAlign: "center",
    paddingHorizontal: 4,
    marginTop: 4,
  },
});
