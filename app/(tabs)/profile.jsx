import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView} from "react-native";

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





// CREATE TABLE pais (
//   id_pais SERIAL PRIMARY KEY,
//   desc_corta_pais VARCHAR(20) DEFAULT NULL,
//   desc_larga_pais VARCHAR(200) DEFAULT NULL,
//   estado_activo BOOLEAN DEFAULT TRUE
// );






export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

    
      <View
        style={{
          flex: 1,
          // position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "#555",
        }}
      />
      <View style={styles.view_img_user_wall}>
        <Image
          source={require("@/assets/images/profile/3.jpg")}
          style={styles.img_user_wall}
        />
        <Image
          source={require("@/assets/icons/rahemza.png")}
          style={styles.img_user_profile}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rolando </Text>
        <Text style={styles.nivel}>Legendario 2</Text>
      </View>

      {/* <ScrollView style={styles.container_scroll_horizontal}> */}

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>455 </Text>
          <Text style={styles.statLabel}>Total Films</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>33</Text>
          <Text style={styles.statLabel}>Film This Year</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Lists</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>30</Text>
          <Text style={styles.statLabel}>Review</Text>
        </View>
      </View>

      {/* Favorite Films */}
      <Text style={styles.sectionTitle}>Favorite Films</Text>
      <ScrollView
        contentContainerStyle={styles.container_scroll_horizontal}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={140}
        horizontal
      >
        <View style={styles.filmRow}>
          {favoriteFilms?.map((film, index) => (
            <View
              key={film.id}
              style={[
                styles.filmPoster_view,
                index === 0 && styles.firstItem,
                index === favoriteFilms.length - 1 && styles.lastItem,
              ]}
            >
              <Image
                source={require("@/assets/images/movie/titanic.jpg")}
                // source={{ uri: film.poster }}
                transition={300}
                style={styles.filmPoster}
                contentFit="cover"
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Favorite Films */}
      <Text style={styles.sectionTitle}>Films Favoritos</Text>
      <ScrollView
        contentContainerStyle={styles.container_scroll_horizontal}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToAlignment="start"
        snapToInterval={140}
        horizontal
      >
        <View style={styles.filmRow}>
          {favoriteFilms?.map((film, index) => (
            <View
              key={film.id}
              style={[
                styles.filmPoster_view,
                index === 0 && styles.firstItem,
                index === favoriteFilms.length - 1 && styles.lastItem,
              ]}
            >
              <Image
                source={require("@/assets/images/movie/corazon.jpg")}
                // source={{ uri: film.poster }}
                transition={300}
                style={styles.filmPoster}
                contentFit="cover"
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    // backgroundColor: "#09122C",
    // backgroundColor: "#0a0a0d",
    backgroundColor: "#0e201a",
  },
  view_img_user_wall: {
    height: 200,
    width: "100%",
  },
  img_user_wall: {
    height: 200,
    width: "100%",
    opacity: 0.7,
  },
  img_user_profile: {
    height: 100,
    width: 100,
    bottom: -50,
    right: 50,
    position: "absolute",
    padding: 10,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#000",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  nivel: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "#088dd8",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },

  // otro
  container_scroll_horizontal: {
    paddingVertical: 20,
    // backgroundColor: "#1c1c2e",
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
    color: "#e06b9c", // tono rosado/violeta como en la imagen
  },
  statLabel: {
    fontSize: 14,
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  filmRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 16,
  },
  filmPoster_view: {
    width: 115,
    height: 180,
    marginRight: 12,
    borderRadius: 8,
  },

  firstItem: {
    marginLeft: 0, // Sin margin extra al inicio
  },
  lastItem: {
    marginRight: -12, // Margin extra al final
  },
  filmPoster: {
    width: 110,
    height: 180,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
});



