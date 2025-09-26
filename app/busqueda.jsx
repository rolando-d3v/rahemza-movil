import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text, Image, StyleSheet } from "react-native";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = async () => {
    if (!query) return;

    try {
      const API_KEY = "TU_API_KEY_AQUI"; // 🔑 pon tu API Key
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Error buscando películas:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar película..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={searchMovies} />

      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            {item.poster_path && (
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
                style={styles.poster}
              />
            )}
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  poster: {
    width: 60,
    height: 90,
    marginRight: 10,
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
